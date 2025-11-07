// 批量更新地标坐标工具
// 使用OpenStreetMap Nominatim API获取地标坐标并更新JSON

// 地标数据（从landmarks.json文件加载）
let landmarks30 = null;

// 加载地标数据
async function loadLandmarks() {
  if (landmarks30) return landmarks30;

  try {
    // 在Node.js环境中
    if (typeof window === 'undefined') {
      // 支持 CommonJS 和 ESM
      let fs, path, __dirname;
      if (typeof require !== 'undefined') {
        // CommonJS
        fs = require('fs');
        path = require('path');
        __dirname = path.dirname(__filename || require.main.filename);
      } else {
        // ESM
        fs = await import('fs');
        path = await import('path');
        const { fileURLToPath } = await import('url');
        __dirname = path.dirname(fileURLToPath(import.meta.url));
        fs = fs.default || fs;
        path = path.default || path;
      }
      const filePath = path.join(__dirname, 'landmarks.json');
      const data = fs.readFileSync(filePath, 'utf8');
      landmarks30 = JSON.parse(data);
      return landmarks30;
    }
    // 在浏览器环境中
    else if (typeof fetch !== 'undefined') {
      const response = await fetch('landmarks.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      landmarks30 = await response.json();
      return landmarks30;
    } else {
      throw new Error('Neither Node.js nor browser environment detected');
    }
  } catch (error) {
    console.error('Error loading landmarks.json:', error);
    throw new Error('Failed to load landmarks.json. Please ensure the file exists.');
  }
}

// 保存地标数据到JSON文件
async function saveLandmarks() {
  if (!landmarks30) {
    console.error('No landmarks data to save');
    return false;
  }
  
  try {
    // 在Node.js环境中
    if (typeof window === 'undefined') {
      // 支持 CommonJS 和 ESM
      let fs, path, __dirname;
      if (typeof require !== 'undefined') {
        // CommonJS
        fs = require('fs');
        path = require('path');
        __dirname = path.dirname(__filename || require.main.filename);
      } else {
        // ESM
        fs = await import('fs');
        path = await import('path');
        const { fileURLToPath } = await import('url');
        __dirname = path.dirname(fileURLToPath(import.meta.url));
        fs = fs.default || fs;
        path = path.default || path;
      }
      const filePath = path.join(__dirname, 'landmarks.json');
      fs.writeFileSync(filePath, JSON.stringify(landmarks30, null, 2), 'utf8');
      console.log(`\n✓ 已保存到 ${filePath}`);
      return true;
    }
    // 在浏览器环境中，下载文件
    else if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const jsonStr = JSON.stringify(landmarks30, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'landmarks.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      console.log('\n✓ 已下载 landmarks.json');
      return true;
    } else {
      throw new Error('Neither Node.js fs nor browser APIs are available');
    }
  } catch (error) {
    console.error('Error saving landmarks.json:', error);
    return false;
  }
}


// 使用OpenStreetMap Nominatim API获取地标坐标
async function getLandmarkCoordinates(landmarkName, retry = false) {
  // 第一次尝试：添加"故宫"前缀
  // 第二次尝试（retry=true）：只使用地标名称，不添加前缀
  const searchQuery = retry ? landmarkName : `故宫 ${landmarkName}`;
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1&bounded=1&viewbox=116.2,39.8,116.5,40.0`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'TourBeijingApp/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.length > 0) {
      const result = data[0];
      return {
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
        displayName: result.display_name
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching coordinates for ${landmarkName}:`, error);
    return null;
  }
}

// 更新单个地标坐标
async function updateLandmarkCoordinates(landmark, index) {
  console.log(`[${index + 1}/${landmarks30.length}] 正在搜索: ${landmark.name}...`);

  // 第一次尝试
  let result = await getLandmarkCoordinates(landmark.name, false);

  // 如果第一次失败，再试一次（不使用"故宫"前缀）
  if (!result) {
    console.log(`  第一次搜索失败，尝试其他搜索方式...`);
    await new Promise(resolve => setTimeout(resolve, 1100)); // 延迟1.1秒
    result = await getLandmarkCoordinates(landmark.name, true);
  }

  if (result) {
    landmark.lat = result.lat;
    landmark.lng = result.lng;
    // 移除"未找到"标记（如果存在）
    delete landmark.notFound;
    console.log(`✓ ${landmark.name}: ${result.lat.toFixed(6)}, ${result.lng.toFixed(6)}`);
    console.log(`  地址: ${result.displayName}`);
    return true;
  } else {
    // 标记为未找到
    landmark.notFound = true;
    console.log(`✗ ${landmark.name}: 未找到坐标（已标记为未找到）`);
    return false;
  }
}

// 批量更新所有地标坐标
async function updateAllLandmarks() {
  // 确保数据已加载
  if (!landmarks30) {
    await loadLandmarks();
  }

  if (!landmarks30 || landmarks30.length === 0) {
    console.error('无法加载地标数据');
    return null;
  }

  console.log('开始批量更新地标坐标...\n');

  const updated = [];
  const failed = [];

  for (let i = 0; i < landmarks30.length; i++) {
    const landmark = landmarks30[i];
    
    // 跳过已经标记为"未找到"的地标（如果只想更新未找到的，可以移除这个检查）
    // if (landmark.notFound) {
    //   console.log(`[${i + 1}/${landmarks30.length}] 跳过已标记为未找到的地标: ${landmark.name}`);
    //   continue;
    // }
    
    const success = await updateLandmarkCoordinates(landmark, i);

    if (success) {
      updated.push(landmark.name);
    } else {
      failed.push(landmark.name);
    }

    // 添加延迟以避免API请求过快（Nominatim要求每秒最多1个请求）
    if (i < landmarks30.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1100));
    }
  }

  console.log('\n=== 更新完成 ===');
  console.log(`成功: ${updated.length} 个`);
  console.log(`失败: ${failed.length} 个`);

  if (failed.length > 0) {
    console.log('\n失败的地标（已标记为未找到）:');
    failed.forEach(name => console.log(`  - ${name}`));
  }

  // 保存到JSON文件
  await saveLandmarks();

  // 输出更新后的JSON
  console.log('\n=== 更新后的JSON ===');
  console.log(JSON.stringify(landmarks30, null, 2));

  return landmarks30;
}

// 更新指定地标坐标
async function updateSingleLandmark(landmarkName) {
  // 确保数据已加载
  if (!landmarks30) {
    await loadLandmarks();
  }

  if (!landmarks30 || landmarks30.length === 0) {
    console.error('无法加载地标数据');
    return null;
  }

  const landmark = landmarks30.find(lm => lm.name === landmarkName);

  if (!landmark) {
    console.log(`未找到地标: ${landmarkName}`);
    return null;
  }

  console.log(`正在搜索: ${landmarkName}...`);
  
  // 第一次尝试
  let result = await getLandmarkCoordinates(landmarkName, false);
  
  // 如果第一次失败，再试一次
  if (!result) {
    console.log(`  第一次搜索失败，尝试其他搜索方式...`);
    await new Promise(resolve => setTimeout(resolve, 1100));
    result = await getLandmarkCoordinates(landmarkName, true);
  }

  if (result) {
    landmark.lat = result.lat;
    landmark.lng = result.lng;
    // 移除"未找到"标记（如果存在）
    delete landmark.notFound;
    console.log(`✓ ${landmarkName}: ${result.lat.toFixed(6)}, ${result.lng.toFixed(6)}`);
    console.log(`  地址: ${result.displayName}`);

    // 保存到JSON文件
    await saveLandmarks();

    console.log('\n=== 更新后的JSON ===');
    console.log(JSON.stringify(landmark, null, 2));
    return landmark;
  } else {
    // 标记为未找到
    landmark.notFound = true;
    console.log(`✗ ${landmarkName}: 未找到坐标（已标记为未找到）`);
    
    // 保存到JSON文件
    await saveLandmarks();
    
    return landmark;
  }
}

// 导出函数供外部使用（ESM）
export {
  loadLandmarks,
  saveLandmarks,
  getLandmarkCoordinates,
  updateLandmarkCoordinates,
  updateAllLandmarks,
  updateSingleLandmark
};

// 导出 landmarks30 的 getter
export function getLandmarks30() {
  return landmarks30;
}

// CommonJS 支持（向后兼容）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    loadLandmarks,
    saveLandmarks,
    getLandmarkCoordinates,
    updateLandmarkCoordinates,
    updateAllLandmarks,
    updateSingleLandmark,
    getLandmarks30,
    get landmarks30() { return landmarks30; }
  };
}

// 如果在浏览器环境中运行，将函数添加到全局作用域
if (typeof window !== 'undefined') {
  window.updateLandmarks = {
    load: loadLandmarks,
    save: saveLandmarks,
    updateAll: updateAllLandmarks,
    updateSingle: updateSingleLandmark,
    getCoordinates: getLandmarkCoordinates
  };

  // 自动加载数据
  loadLandmarks().then(() => {
    console.log('地标坐标更新工具已加载');
    console.log('使用方法:');
    console.log('  - updateLandmarks.updateAll() - 批量更新所有地标');
    console.log('  - updateLandmarks.updateSingle("地标名称") - 更新单个地标');
    console.log('  - updateLandmarks.getCoordinates("地标名称") - 获取地标坐标');
    console.log('  - updateLandmarks.save() - 保存到JSON文件');
  });
}

// 如果直接运行此文件，执行批量更新
// 可以通过命令行参数控制：node update_landmarks.js [retry|single:地标名]
if (import.meta.url === `file://${process.argv[1]}` || (typeof require !== 'undefined' && require.main === module)) {
  const args = process.argv.slice(2);
  if (args[0]?.startsWith('single:')) {
    const landmarkName = args[0].replace('single:', '');
    updateSingleLandmark(landmarkName).catch(console.error);
  } else {
    updateAllLandmarks().catch(console.error);
  }
}