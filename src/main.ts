import './style.css'
import * as OBC from "openbim-components"

// Three.js 準備
const viewer = new OBC.Components()

// シーン
const sceneComponent = new OBC.SimpleScene(viewer)
sceneComponent.setup()
viewer.scene = sceneComponent

// レンダラー
const viewerContainer = document.getElementById("app") as HTMLDivElement
const rendererComponent = new OBC.PostproductionRenderer(viewer, viewerContainer)
viewer.renderer = rendererComponent

// カメラ
const cameraComponent = new OBC.OrthoPerspectiveCamera(viewer)
viewer.camera = cameraComponent

await viewer.init()

// IFC読み込み準備
const ifcLoader = new OBC.FragmentIfcLoader(viewer)
await ifcLoader.setup()

// ファイル選択アイコン表示
const mainToolbar = new OBC.Toolbar(viewer)
mainToolbar.addChild(
  ifcLoader.uiElement.get("main"),
)

viewer.ui.addToolbar(mainToolbar)
