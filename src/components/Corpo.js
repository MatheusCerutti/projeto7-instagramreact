import SideBar from "./SideBar"
import Stories from "./Stories"
import Posts from "./Posts"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories></Stories>
                <Posts></Posts>
            </div>
            <SideBar></SideBar>
        </div>
    )
}



