import "./style.css";
import { refreshPage } from "./pageRenders";
import { checkStorage, setStorage } from "./storage";

 /// localStorage.clear()
checkStorage();
refreshPage();

window.addEventListener("beforeunload", setStorage);
///