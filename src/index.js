
import "./style.css";
import { doDomStuff, newDomSkeleton } from "./modules/domStuff.js";
import { checkFormValidation } from "./modules/formvalid.js";
import { submitSearch } from "./modules/searchSubmit.js";



newDomSkeleton();
doDomStuff().appendImage();
checkFormValidation();
submitSearch();

