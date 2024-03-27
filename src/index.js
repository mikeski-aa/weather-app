import "./style.css";
import { doDomStuff, newDomSkeleton, expandButtonListen} from "./modules/domStuff.js";
import { checkFormValidation } from "./modules/formvalid.js";
import { submitSearch, speedConvert, tempConvert, details,aboutInfo } from "./modules/buttons.js";



newDomSkeleton();
doDomStuff().appendSearchIcon();
doDomStuff().appendExpandIconRight();
expandButtonListen();
checkFormValidation();
submitSearch();
speedConvert();
tempConvert();
details();
aboutInfo();



 