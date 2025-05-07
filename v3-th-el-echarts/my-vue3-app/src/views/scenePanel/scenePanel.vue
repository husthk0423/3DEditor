<template>
    <div class="scene-container">
      <!-- Three.js 渲染容器 -->
      <div ref="canvasContainer" class="canvas-wrapper">
        <div class="corner top-left">
          <sceneToolbar />
        </div>
        <!-- 右上角的子元素 -->
        <div class="corner top-right">
          <sceneCameraType />
        </div>
        <!-- 左下角的子元素 -->
        <div class="corner bottom-left">
          <sceneRenderInfo />
        </div>
        <!-- 右下角的子元素 -->
        <!-- <div class="corner bottom-right">右下</div> -->
      </div>
    
    </div>
  </template>
  
  <script setup>
   import { ref, onMounted, onUnmounted, shallowRef } from 'vue' // 使用 shallowRef
    import sceneToolbar from './sceneToolbar.vue'
    import sceneCameraType  from './sceneCameraType.vue'
    import sceneRenderInfo from './sceneRenderInfo.vue'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
    import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper.js'
    // DOM 引用
    const canvasContainer = ref(null)
    
    // Three.js 相关引用
    const scene = new THREE.Scene()
// 使用 shallowRef 防止深度代理
    const renderer = shallowRef(null)
    const camera = shallowRef(null)
    const controls = shallowRef(null)
    const viewHelper = shallowRef(null) 
    let animationFrameId = null
    
    // 初始化场景
    const initScene = () => {
        // 初始化渲染器
        renderer.value = new THREE.WebGLRenderer({
           antialias: true,
           alpha: true,
           preserveDrawingBuffer: true,// 保留绘图缓冲便于截图
           logarithmicDepthBuffer: true // 启用对数深度缓冲
          })
        renderer.value.setSize(
        canvasContainer.value.clientWidth,
        canvasContainer.value.clientHeight
        )
        renderer.value.autoClear = false // 关键：禁用自动清除
        // renderer.value.setClearColor(new THREE.Color('#f5efef'))
        // renderer.value.setClearColor(new THREE.Color('#515050'))
        
        canvasContainer.value.appendChild(renderer.value.domElement)
        // 初始化相机
        camera.value = new THREE.PerspectiveCamera(
        75,
        canvasContainer.value.clientWidth / canvasContainer.value.clientHeight,
        0.1,
        1000
        )
        camera.value.position.set(0, 3, 5)
        camera.value.far = 100 // 缩短远平面测试
        camera.value.lookAt(0, 0, 0)
    


        // 创建 ViewHelper
        viewHelper.value = new ViewHelper(
          camera.value, 
          renderer.value.domElement
        );
        // 处理点击事件
        // 4. 事件绑定（使用箭头函数保持上下文）
        const handleClick = (event) => viewHelper.value.handleClick(event)
        renderer.value.domElement.addEventListener('click', handleClick)
       
   
        // 添加光源
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
        scene.add(ambientLight)
        
        const directionalLight = new THREE.DirectionalLight(0xffffff,1.0)
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)
    
        // 创建网格物体
        const geometry = new THREE.BoxGeometry(2, 2, 2)
        // const material = new THREE.MeshPhongMaterial({
        // color: 0x2194ce,
        // wireframe: true,
        // wireframeLinewidth: 2
        // })

        const material = new THREE.MeshBasicMaterial({
  color: 0xff0000, // 红色便于观察
  wireframe: true
})
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
    
        // 添加地面网格
        const gridHelper = new THREE.GridHelper(40, 40)
        scene.add(gridHelper)
    
        // 添加辅助坐标系（验证场景内容）
        const axesHelper = new THREE.AxesHelper(5)
        scene.add(axesHelper)
        // // 添加相机视锥体辅助线
        // const cameraHelper = new THREE.CameraHelper(camera.value)
        // scene.add(cameraHelper)

        // 输出场景结构
        console.log('场景内容:', scene.children)
        // console.log('相机位置:', camera.value)

        // 初始化控制器
        controls.value = new OrbitControls(camera.value, renderer.value.domElement)
        controls.value.enableDamping = true
        controls.value.dampingFactor = 0.05
    }
    
    // 处理窗口大小变化
    const handleResize = () => {
        if (!camera.value || !renderer.value) return
        
        camera.value.aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
        camera.value.updateProjectionMatrix()
        renderer.value.setSize(
        canvasContainer.value.clientWidth,
        canvasContainer.value.clientHeight
        )
      // viewHelper.value?.update() // 安全调用
    }
    
    // 动画循环
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate)
        controls.value.update()
        // 手动清除画布（颜色、深度、模板缓冲）
  renderer.value.clear()
        renderer.value.render(scene, camera.value)
          // 再渲染 ViewHelper
        viewHelper.value?.render(renderer.value)
    }
    
    // 生命周期钩子
    onMounted(() => {
        initScene()
        animate()
        
        // 初始化 ResizeObserver
        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(canvasContainer.value)
    
        // 组件卸载时清理
        onUnmounted(() => {
          // const canvas = renderer.value?.domElement
          // if (canvas) {
          //   canvas.removeEventListener('click', viewHelper.value?.handleClick)
          //   canvas.removeEventListener('mousemove', viewHelper.value?.handleMove)
          // }
        cancelAnimationFrame(animationFrameId)
        resizeObserver.disconnect()
        controls.value.dispose()
        renderer.value.dispose()
        scene.clear()
        })
    })
  </script>
  
  <style scoped>
    .scene-container {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
  
   
    }
    .threejs-view-helper {
      z-index: 999 !important;
    }
    .canvas-wrapper {
        flex: 1;
        
        /* position: relative; */

     
    }
    
    .canvas-wrapper canvas {
      display: block;
      position: relative;
      z-index: 1 !important;
    }
    /* 四个小元素共有的样式 */
    .corner {
      position: absolute;   /* 绝对定位 */
      /* pointer-events: none; 
       */
      color: #fff;              /* 字体颜色 */
      text-align: center;   /* 文本水平居中 */
      border-radius: 4px;   /* 圆角 */

      /* display: none !important; */
    }

    /* 分别定位到四个角 */
    .top-left {
      top: 5px;
      left: 5px;
      width:35px;          /* 子元素宽度 */
      height: 140px;         /* 子元素高度 */
      line-height: 60px;    /* 文本垂直居中 */
    }

    .top-right {
      top: 5px;
      right: 5px;
      width: 280px;          /* 子元素宽度 */
      height:35px;         /* 子元素高度 */
     
    }

    .bottom-left {
      bottom:25px;
      left:20px;
      width: 100px;          /* 子元素宽度 */
      height: 100px;         /* 子元素高度 */
     
      /* background-color:#409eff */
    }

    .bottom-right {
      z-index: 2;
      pointer-events: auto; /* 允许右下角元素交互 */
      bottom: 5px;
      right: 5px;
      width: 60px;          /* 子元素宽度 */
      height: 80px;         /* 子元素高度 */
      line-height: 80px;    /* 文本垂直居中 */
    }
  </style>