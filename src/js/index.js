import '../css/normalize.scss';
import '../css/action.scss';
import '../css/style.css';
import '../css/block/header.scss';
import '../css/block/main/start/start.scss';
import '../css/block/main/start/section.scss';
import '../css/block/main/dashboard/dashboard.scss';
import '../css/block/main/dashboard/object-explorer.scss';
import '../css/block/main/dashboard/card.scss';
import '../css/block/main/dashboard/card-section.scss';
import '../css/block/main/dashboard/card-subsection.scss';

import myPng from '../image/dashboard/1.png';

const img = document.createElement('img');
img.src = myPng;
document.getElementById('image-switcher').appendChild(img);
