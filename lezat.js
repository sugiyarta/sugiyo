/* NAVIGATION MENU */
.menu {
font:normal normal 13px Arial, sans-serif;
padding:0 0;
background:#fff;
margin:0 auto;
height:34px;
border-left:1px solid #ddd;
border-bottom:1px solid #ddd;
border-right:1px solid #ddd;
overflow:hidden;
}
.nav-menu {
list-style-type:none;
margin:0 0 0 0;
padding:0 0 0 0;
}
.nav-menu li {
display:block;
float:left;
line-height:34px;
margin:0 0 0 0;
padding:0 0 0 0;
border-right:1px solid #e5e5e5;
}
.nav-menu li a {
background:#fff;
color:#555;
display:block;
padding:0 8px;
}
.nav-menu li a:hover {
background:#e2b780;
}
ul.nav-social {
height:34px;
margin:0 0 0 0;
padding:0 0;
float:right;
}
ul.nav-social li {
display:inline-block;
list-style-type:none;
float:right;
margin:0 0;
padding:0 0;
border-right:none;
border-left:1px solid #e5e5e5;
}
ul.nav-social li a {
display:inline-block;
line-height:34px;
height:34px;
padding:0 8px;
margin:0 0 0 0;
color:#ffffff;
background:#666;
}
ul.nav-social li a i {
line-height:34px;
}
ul.nav-social li a:hover {
color:#fff;
}
ul.nav-social li a.fcb:hover {
background:#3B5A9B;
}
ul.nav-social li a.gpl:hover {
background:#DD4B39;
}
ul.nav-social li a.twt:hover {
background:#1BB2E9;
}
ul.nav-social li a.ytb:hover {
background:#ED3F41;
}
/* HEADER WRAPPER */
#header-wrapper {
margin:0 auto;
overflow:hidden;
}
.header {
float:left;
width:25.7%;
max-width:257px;
margin:15px 0;
}
.header h1.title,.header p.title {
font:normal bold 24px Fjalla One, Arial, Helvetica, sans-serif;
margin:0 0 0 0;
text-transform:uppercase;
}
.header .description {
color:#5a5a5a;
}
.header a {
color:#ce003e;
}
.header a:hover {
color:#999;
}
.header img {
display:block;
}
.header-right {
float:right;
padding:0;
overflow:hidden;
margin:15px 0;
width:72.8%;
max-width:728px;
}
.header-right img {
display:block;
}
/* NAVIGATION MENU 2 */
.toggleMenu {
display:none;
background:#444;
padding:0 15px;
height:28px;
line-height:48px;
color: #fff !important;
}
#nav {
font:normal bold 12px Arial, sans-serif;
background:#444;
text-transform:uppercase;
height:48px;
line-height:48px;
}
.nav-menu2 {
background:#444;
list-style: none;
margin:0 0 0 0;
*zoom: 1;
float:left;
}
.nav-menu2:before,
.nav-menu2:after {
content: " ";
display: table;
}
.nav-menu2:after {
clear: both;
}
.nav-menu2 ul {
list-style: none;
margin:0 0 0 0;
width:6em;
}
.nav-menu2 a {
display:block;
padding:0 15px;
}
.nav-menu2 li {
position: relative;
margin:0 0;
}
.nav-menu2 > li {
float: left;
}
.nav-menu2 > li > a {
display: block;
height:48px;
line-height:48px;
color:#fff;
box-shadow: 0 4px 0 #444 inset;
}
.nav-menu2 > li > a.active {
background:#444;
box-shadow: 0 4px 0 #444 inset;
}
.nav-menu2 > li:hover > a {
background:#555;
box-shadow: 0 4px 0 #fff inset;
}
.nav-menu2 li ul {
background:#fff;
display:block;
position:absolute;
left:0;
z-index:10;
visibility:hidden;
opacity:0;
-webkit-transition:all .25s ease-out;
-moz-transition:all .25s ease-out;
-ms-transition:all .25s ease-out;
-o-transition:all .25s ease-out;
transition:all .25s ease-out;
border: 1px solid #d9d9d9;
border: 1px solid rgba(217,217,217,1);
box-shadow:0 0 2px rgba(0,0,0,0.2);
}
.nav-menu2 li li ul {
left:100%;
top:-1px;
}
.nav-menu2 > li.hover > ul {
visibility:visible;
opacity:10;
}
.nav-menu2 > li > ul:before {
content:"";
width:0px;
height:0px;
position:absolute;
bottom:100%;
left:20px;
border-width:8px;
border-style:solid;
border-color:transparent transparent #fff transparent;
display:block;
}
.nav-menu2 li li.hover ul {
visibility:visible;
opacity:10;
}
.nav-menu2 li li a {
display: block;
color:#333;
position: relative;
z-index:100;
line-height:32px;
}
.nav-menu2 li li a:hover {
background:#f0f0f0;
}
.nav-menu2 li li li a {
background:#fff;
z-index:20;
color:#333;
}
.nav-menu2 li .parent:after {
content: "\f107";
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
padding-left:6px;
}
#search-form {
background:#fff;
float:right;
margin:0 0;
width:200px;
}
#search-form table {
width:auto;
margin:0 0 0 0;
}
#search-form td.search-box {
padding-right:30px;
}
#search-form input#search-box[type="text"] {
background:#fff;
height:36px;
line-height:36px;
margin:5px 0 5px 10px;
padding:0 10px;
width:100%;
color:#696969;
border:#1px;
solid:#444;
}
#search-form input#search-button[type="submit"] {
font-family: FontAwesome;
background:#00ce90;
color:#ffffff;
height:39px;
line-height:36px;
margin:5px 10px 5px 0;
padding:0 12px;
border:#1px;
solid:#444;
outline:none;
transition:all 0.25s;
-moz-transition:all 0.25s;
-webkit-transition:all 0.25s;
}
#search-form input#search-button[type="submit"]:hover{
background:#f00;
cursor:pointer;
}
#search-form input#search-box[type="text"]:focus {
background:#eee;
outline:none;

}
/* CONTENT WRAPPER */
#content-wrapper {
background-color:transparent;
background-repeat:repeat-x;
background-position:top center;
margin:0 auto;
padding:5px 0 0;
word-wrap:break-word;
}
.largebanner {
}
.largebanner .widget {
background:#fff;
padding:10px;
overflow:hidden;
}
.largebanner img, .largebanner iframe{
display:block;
max-width:auto;
border:none;
overflow:hidden;
}
/* POST WRAPPER */
#post-wrapper {
background:transparent;
float:left;
width:70%;
max-width:700px;
margin:0 0 10px;
}
.post-container {
padding:15px 15px 0 0;
}
.breadcrumbs {
font-size:11px;
color:#666;
padding:0 0 10px;
margin:0 0 12px;
border-bottom:3px solid #eeeeee;
}
.post {
border-bottom:3px solid #eeeeee;
margin:0 0 15px;
padding:0 0 15px;
}
.post-body {
line-height: 1.6;
}
h2.post-title, h1.post-title {
font:normal normal 20px Fjalla One, Helvetica, Arial, sans-serif;
}
h2.post-title a, h1.post-title a, h2.post-title, h1.post-title {
color:#ff0000;
}
h2.post-title a:hover, h1.post-title a:hover {
color:#ff0000;
}
.img-thumbnail {
background:#fbfbfb url(http://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/w200-h140-c/no-image.png) no-repeat center center;
position:relative;
float:left;
width:200px;
height:150px;
margin:0 15px 0 0;
}
.img-thumbnail img {
width:200px;
height:150px;
}
span.rollover {
opacity: 1;
-o-transition:all 1s;
-moz-transition:all 1s;
-webkit-transition:all 1s;
background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADx0RVh0QUxUVGFnAFRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4g2GvoxAAAAB90RVh0Q29weXJpZ2h0AFJPWUFMVFkgRlJFRSBMSUNFTlNFIN7Zi2kAAABFaVRYdERlc2NyaXB0aW9uAAAAAABUaGlzIGlzIHRoZSBpY29uIGZyb20gR2VudGxlZmFjZS5jb20gZnJlZSBpY29ucyBzZXQuILwR+BoAAAAjaVRYdENvcHlyaWdodAAAAAAAUk9ZQUxUWSBGUkVFIExJQ0VOU0UgJ10KSgAAAidJREFUeNqsVUuO2kAQtROQBomFhZBAIIRBYh3nBuMbMCcI3IAbZOYEmTkBzAnMMjvmBrBnkUYgxD9e8QfnlVVGlmVsQ6akJ7e6X326uqosSTfI+XxWgGfgj+UR7BnAo3SvHI/H6ul0+gtYITDAVRw9OYrxw+FQw6fp2hKyLL/TF1BxgW/4Vl3nPUCPx+NmqPHdbqft93vLhYYfD/sq0HV40DMipWa73XYAi1GNwO+6+MFvsl6vtc1mYzGaUQICT3V0oG98CSIjt1VUhsR4ieIgkUgIcFukQ/qxEAeXdTKZFFErDnoDZx0LqfuiUzU39ouI6sCJRL3RwYUf9gaC0kRYrVa1Gxz8YD0R5qANsskP9nOxWChhxpfLZQNclQvjPdBBKpUyQX7jaKhjjfl8ftUJzmrg/GI+6b4GOphOpw3MFiq5Ht/iEehivwYoLp46m82aOGu6yrqeTqdN31k0mUwUnj3UuSbmzneKHmvNQxV+BQB+PZPJtGj91Xs4Ho8VGOtg6bT5A41h7Ok0mtjJA5950/UBPGWz2d++03Q0Ginw3vGJlKSdz+efKAC+mTfydi6X63mVLn0wHA41TsO1mrebB0ZoBLeilqx9g8FgoHHkvhWCs5dCofB8z49KFkJQOoKM14vFYku6U2L8oNdqu66q6t3G7VFBg8lVuw6oSfRSqfRfxm0HZMg9c7gD9XK5/CF9gtiP3O/3NU4V5VyvVCo96ZPknwADAKtR4YfNlLm3AAAAAElFTkSuQmCC) center center no-repeat #333;
cursor: pointer;
height:150px;
width:200px;
position: absolute;
z-index: 1;
opacity: 0;
}
span.rollover:hover {
opacity: .6;
-o-transition:all 1s;
-moz-transition:all 1s;
-webkit-transition:all 1s;
}
.post-info {
background:#ffffff;
margin:0 0 12px;
color:#696969;
font-size:11px;
}
.post-info a {
display:inline-block;
color:#696969;
}
.author-info, .time-info, .comment-info, .label-info, .review-info {
margin-right:12px;
display:inline;
}
a.readmore {
display:inline-block;
margin:12px 0 0;
background-color:#ffffff;
border:1px solid #ffffff;
padding:0px 10px;
line-height:26px;
color:#26a6ee;
font-size:11px;
font-weight:bold;
text-transform:uppercase;
}
a.readmore:hover  {
border: 1px solid #3f3f3f;
}
/* Page Navigation */
#blog-pager {
margin:0 0;
clear:both !important;
padding:0 0;
font-size:12px;
font-weight:normal;
}
a.home-link, #blog-pager-newer-link a, #blog-pager-older-link a {
background-color:#ffffff;
border: 1px solid #ffffff;
padding:0px 12px;
line-height:28px;
color:#3f3f3f;
}
#blog-pager-newer-link a {
float:left;
display:block;
}
#blog-pager-older-link a {
float:right;
display:block;
}
a.home-link {
display:inline-block;
}
#blog-pager-older-link a:hover, #blog-pager-newer-link a:hover, a.home-link:hover {
border: 1px solid #333;
}
/* Page Navigation */
.pagenavi {
clear:both;
margin:-5px 0 10px;
text-align:center;
font-size:11px;
font-weight:bold;
text-transform:uppercase;
}
.pagenavi span,.pagenavi a {
padding:6px 10px;
margin-right:3px;
display:inline-block;
color:#26a6ee;
background-color:#ffffff;
border: 1px solid #ffffff;
}
.pagenavi .current, .pagenavi .pages, .pagenavi a:hover {
border: 1px solid #3f3f3f;
}
.pagenavi .pages {
display:none;
}
/* SIDEBAR WRAPPER */
#sidebar-wrapper {
background:transparent;
float:right;
width:30%;
max-width:300px;
margin:0 auto;
}
.sidebar-container {
padding:15px 0;
}
.sidebar h2, .panel h2 {
font:normal bold 12px Arial, sans-serif;
color:#3f3f3f;
margin:0 0 10px 0;
padding:6px 0;
border-bottom:3px solid #F0F0F0;
text-transform:uppercase;
position:realtive;
}
.sidebar h2:after, .panel h2:after {
content: " ";
width:90px;
height: 0px;
position: absolute;
left: 0;
bottom: -3px;
border-bottom:3px solid #ce003e;
}
.sidebar .widget {
margin:0 0 15px;
}
.sidebar ul, .sidebar ol {
list-style-type:none;
margin:0 0 0 0;
padding:0 0 0 0;
}
.sidebar li {
margin:5px 0;
padding:0 0 0 0;
}
/* Recent Post */
.recent-post-title {
background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABiwAAAYsB4dDSvAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATySURBVEiJbZV9jFRnFYef887szrpi2qXazUp3mfe9Y20xIaHYhETj8iVGaKCBUC0tVoQoGvwgITRKiGCU+hGxwaCGRE0gUtLSFlCIQHddmsa0icSmJhuWzL13d9yATSMbTAu7Ozv3+MeeC8PH/DVvTs7z/s457z0/UVUBFCCO450i8iOmf4NZli2sVCrvASRJ8mngNeAeYBx4LITQBzA0NPSRYrF4RkQWWO7PRVWxxGeBn1pgSER6vffvAlSr1XnOuT6gA5hwzq0ql8unAQYHB2e0tbX9FfiM5T4fQthaNOjWJmi1paVlcXd397sAaZrOdc69ZtBJYE0OvXz5cnupVPpLE3R/CGErgEvTdAuwF0BEkizLFnV3d18ypZ9S1T5gJlDPsuyJEMJJgNHR0Q9dv379zyLSa7kHQgjftguQOI4zQIARK38EYGRk5OFGozEA3A9MiciT3vujdmHJOXcCWGacP4YQNjbN6jvOoKOFQmFRDk2S5MFGo9Fn0Iaqrs+hg4ODrc65V3Koqh4KIWzKoUmSfFNEfuVU9ZKqLpo9e3ZqaiKgH+gCMhHZEEXREYDz58+3lEqll4DlpvRIFEUbgMzmsQnYD9Sdc25xFEVVK9875/4GzDIFm7z3hwAGBgaKHR0dR0RkpUGP1mq19UDDyv+qqh7IO9D83HqA14HZ0xXq5iiKDhikEMfxYRF5wgZ1/MqVK2vnz59ft9yngIOAs7Z+TlSVarX6QKFQOKeqwRK3eO/3G9QlSXIIWGfnk+Pj46vnzJkzaUq/JCJ/AgqqegnojaKoKrVa7eP1en0A+IQlbg0hPJ9D0zT9g6o+Y4M6raqrKpXKhCldAxwBisB/RGSh934IwNXr9f4cqqrbm6CSJMmBHAr0FQqFx3NotVpdBbxg0PeyLFuSQy9evDirCHzSyt8RQvhFE/Q3wEa78Fx7e/vKrq6ucVO6wjn3ItAiIv9V1SWVSmXQHkBXsVjsLxpol/d+j/0njuN9IrLZjm/MmDFjRWdn5zWA4eHhLwAvA63AmIgs9d7/CyBN005V7Qe8U9U9IYTdOTRJkr0issWUvlmv15d3dnZ+YLElWZYdA0rAVWBZuVx+21rzMfv8HwKyG8/NEn8GbLfjP4ClIYSrprQ3y7JTQDvwP+fcsnK5/BbAhQsX7mttbe0H5uZtzVtBHMc/FpHtFvhnoVBY1tPTc9Uu/Cxw0qDvq+oXc2itVusolUpnVXWuoXZ77/c4S/yhiOywwDsTExOf7+npGTOlC4BTwIeBayKyIoqiv1vePVNTU6dVdZ7lPhdC2JVP/weq+hML3O4ajwJnmXaN66r6WBRF/XCna6jqL6Mo2pZ3QOI4zpt8u2s8Yq5xLzAhIiu992fgTtcQkX3e++82tXVn3uO7ucZZg04Cq3PoXVzjd83QJEm+LyK7iiKSNBqNW1zDlM4E6iKy1nt/CqZdY3Jy8oZrAL8PIXwrh6Zpug3YA0wUgcWVSmXUBvWQQT8KTAFf9t6fsAtLzrljwGIr/6D3/uvcXPDfA/Ivd7h5bT4IDDC94Bsiss57/6L1tLWtre1Vbi74F0IIT3NzwW9R1V/nwlW115maW1wD+EoOvYtrHA0hrM+hcRx/Q1X3WaxmxvFvNzw8XHbO9TPtGpmqfi2EcBjudA0ROT42NrYOc400TTeKyG8x12g0GovK5fIwwP8B3DF1BfTENDEAAAAASUVORK5CYII=) repeat-x;
margin:10px 0 15px;
padding:0;
position:relative;
}
#recent-post-one-thumb-1 .recent-post-title h2 {
background:#F53477;
}
#recent-post-one-thumb-2 .recent-post-title h2 {
background:#FF9201;
}
#recent-post-one-thumb-3 .recent-post-title h2 {
background:#89C237;
}
#recent-post-one-thumb-4 .recent-post-title h2 {
background:#01ACE2;
}
#recent-post-one-thumb-5 .recent-post-title h2 {
background:#94368E;
}
#recent-post-one-thumb-6 .recent-post-title h2 {
background:#FDCB01;
}
.recent-post-title h2 {
font:normal bold 12px Arial, sans-serif;
height:26px;
line-height:26px;
margin:0 0;
padding:0 10px;
background:#333;
color:#fff;
display:inline-block;
border-right:5px solid #fff;
}
.recent-post-title h2 a {
color:#fff;
}
.recent-post-title h2 a:after {
content: "\f061";
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
padding-left:6px;
}
.recent-post-one-thumb {
float:left;
width:50%;
margin:0 0;
}
.recent-post-one-thumb .widget {
padding:0 15px 15px 0;
}
.recent-post-one-thumb ul {
list-style-type:none;
margin:0 0 0 0;
padding:0 0 0 0;
}
/* Recent Post Label */
ul.label-with-thumbs {
margin:0 0 0 0;
}
ul.label-with-thumbs li {
font-size:12px;
min-height:68px;
margin:0 0 3px 0;
padding:0 0 10px;
border-bottom:3px solid #f0f0f0;
}
.label-thumb {
background:#fbfbfb;
float:left;
margin:0 8px 0 0;
height:68px;
width:68px;
}
.label-thumb img {
height:68px;
width:68px;
}
span.label-thumb-title {
font:normal normal 16px Fjalla One, Helvetica, Arial, sans-serif;
display:block;
margin:0 0 5px;
line-height:1.4em;
}
span.lebel-thumb-summary {
display:block;
margin:10px 0;
color:#888;
}
span.lebel-thumb-footer {
background:#ffffff;
display:block;
font-size:11px;
color:#696969;
}
span.lebel-thumb-footer a {
color:#696969 !important;
display:inline-block;
}
span.label-date, span.label-comment, span.label-more  {
display:inline-block;
margin-right:8px;
}
span.label-comment {
}
span.label-more {
}
span.label-date {
}
span.label-date:before {
content: "\f073";
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
padding-right:4px;
}
span.label-comment:before  {
content: "\f086";
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
padding-right:4px;
}
span.label-more:before {
content: "\f0a9";
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
padding-right:4px;
}
ul.nothumb-labels {
font-size:13px;
}
ul.nothumb-labels li {
padding:6px 0;
font-size:11px;
border-bottom:1px dotted #e5e5e5;
}
ul.nothumb-labels li:before {
content: "\f061";
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
padding-right:6px;
color:#666;
}
ul.nothumb-labels li a {
font-weight:bold;
color:#333;
}
ul.label-with-thumbs li a {
color:#26a6ee;
}
ul.nothumb-labels li a:hover, ul.label-with-thumbs li a:hover {
color:#ff0000;
}
/* BOTTOMBAR */
#bottombar {
background:#f0f0f0;
background-repeat:repeat-x;
background-position:bottom center;
overflow:hidden;
margin:0 auto;
padding:15px;
}
#bottombar .left {
float:left;
width:34%;
}
#bottombar .center {
float:left;
width:34%;
}
#bottombar .right {
float:right;
width:32%;
}
#bottombar .left .widget, #bottombar .center .widget {
margin:0 15px 15px 0;
}
#bottombar .right .widget {
margin:0 0 15px 0;
}
#bottombar h2 {
font:normal bold 12px Arial, sans-serif;
color:#3f3f3f;
margin:0 0 10px 0;
padding:6px 0;
border-bottom:3px solid #ddd;
text-transform:uppercase;
position:relative;
}
#bottombar h2:after {
content: " ";
width:90px;
height: 0px;
position: absolute;
left: 0;
bottom: -3px;
border-bottom:3px solid #ce003e;
}
#bottombar ul, #bottombar ol {
list-style-type:none;
margin:0 0 0 0;
padding:0 0 0 0;
}
#bottombar li {
margin:5px 0;
padding:0 0 0 0;
}
/* FOOTER */
#footer-wrapper {
background:#333333;
margin:0 auto;
padding:10px;
overflow:hidden;
color:#ffffff;
font-size:11px;
}
.footer-left {
float:left;
margin:10px;
}
.footer-right {
float:right;
margin:10px;
}
#footer-wrapper a {
color:#ffffff;
}
#footer-wrapper a:hover {
text-decoration:underline
}
/* CUSTOM WIDGET */
/* Tab Menu */
.set, .panel {
margin: 0 0;
}
.tabs .panel {
padding:0 0;
}
.tabs-menu {
border-bottom:3px solid #ce003e;
padding: 0 0;
margin:0 0;
}
.tabs-menu li {
font:normal bold 12px Arial, sans-serif;
display: inline-block;
*display: inline;
zoom: 1;
margin: 0 3px 0 0;
padding:10px;
background:#f0f0f0;
color:#3f3f3f;
cursor:pointer;
position:relative;
}
.tabs-menu .active-tab {
background:#ce003e;
color:#fff;
}
.tabs-content {
padding:10px 0;
}
.tabs-content .widget li {
float:none !important;
margin:5px 0;
}
.tabs-content .widget ul {
overflow:visible;
}
/* LABEL WIDGET */
.label-size-1,.label-size-2,.label-size-3,.label-size-4,.label-size-5 {
font-size:100%;
filter:alpha(100);
opacity:10
}
.cloud-label-widget-content{
text-align:left
}
.label-size {
transition:all 0.25s;-moz-transition:all 0.25s;-webkit-transition:all 0.25s;
background:#FF4F4F;
display:block;
float:left;
margin:0 3px 3px 0;
color:#ffffff;
font-size:11px;
text-transform:uppercase;
}
.label-size a,.label-size span{
display:inline-block;
color:#ffffff !important;
padding:6px 8px;
font-weight:bold;
}
.label-size:hover {
background:#333333;
}
.label-count {
white-space:nowrap;
padding-right:3px;
margin-left:-3px;
background:#333333;
color:#fff !important;
}
.label-size {
line-height:1.2
}
/* label */
.label-size-1,.label-size-2,.label-size-3,.label-size-4,.label-size-5 {
font-size:100%;
filter:alpha(100);
opacity:10
}
.cloud-label-widget-content{
text-align:left
}
.label-size {
background:#ffffff;
border:1px solid #ffffff;
display:block;
float:left;
margin:0 3px 3px 0;
color:#26a6ee;
font-size:11px;
text-transform:uppercase;
}
.label-size a,.label-size span{
display:inline-block;
color:#26a6ee;
padding:6px 8px;
font-weight:bold;
}
.label-size:hover {
border:1px solid #3f3f3f;
}
.label-count {
white-space:nowrap;
padding-right:3px;
margin-left:-3px;
background:#ffffff;
color:#fff !important;
}
.label-size {
line-height:1.2
}
/* Custom CSS for Blogger Popular Post Widget */
.PopularPosts ul,
.PopularPosts li,
.PopularPosts li img,
.PopularPosts li a,
.PopularPosts li a img {
margin:0 0;
padding:0 0;
list-style:none;
border:none;
background:none;
outline:none;
}
.PopularPosts ul {
margin:.5em 0;
list-style:none;
color:#555;
counter-reset:num;
}
.PopularPosts ul li img {
display:block;
margin:0 .5em 0 0;
width:50px;
height:50px;
float:left;
}
.PopularPosts ul li {
background-color:#eee;
margin:0 10% .4em 0 !important;
padding:.5em 1.5em .5em .5em !important;
counter-increment:num;
position:relative;
}
.PopularPosts ul li:before,
.PopularPosts ul li .item-title a, .PopularPosts ul li a {
font-weight:bold;
color:inherit;
text-decoration:none;
}
.PopularPosts ul li:before {
content:counter(num) !important;
display:block;
position:absolute;
background-color:#fff;
color:#fff !important;
width:22px;
height:22px;
line-height:22px;
text-align:center;
top:0px;
right:0px;
padding-right:0px !important;
}
/* Set color and level */
.PopularPosts ul li:nth-child(1) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(2) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(3) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(4) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(5) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(6) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(7) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(8) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(9) {background-color:#fff;margin-right:1% !important}
.PopularPosts ul li:nth-child(10) {background-color:#fff;margin-right:1% !important}
.PopularPosts .item-thumbnail {
margin:0 0 0 0;
}
.PopularPosts .item-snippet {
font-size:12px;
}
.profile-img{
display:inline;
opaciry:10;
margin:0 6px 3px 0;
}
/* back to top */
#back-to-top {
background:#ff0000;
color:#ffffff;
padding:8px 10px;
font-size:24px;
}
.back-to-top {
position:fixed !important;
position:absolute;
bottom:20px;
right:20px;
z-index:999;
}
/* ==== Related Post Widget Start ==== */
.related-post {
margin: 20px 0 0;
border-top: 3px solid #f0f0f0;
padding: 10px 0 0;
}
.related-post h4 {
font-size:14px;
margin:0 0 .5em;
text-transform:uppercase;
}
.related-post-style-2 {
margin:0 0 0 0 !important;
padding:0 0 0 0 !important;
list-style:none;
}
.related-post-style-2 li {
margin:0 0 0 0;
padding:0 0 0 0;
}
.related-post-style-2 li {
padding:5px 0 !important;
border-top:1px solid #eee;
overflow:hidden;
}
.related-post-style-2 li:first-child {border-top:none}
.related-post-style-2 .related-post-item-thumbnail {
width:60px;
height:60px;
max-width:none;
max-height:none;
background-color:transparent;
border:none;
padding:0;
float:left;
margin:2px 8px 0 0;
}
.related-post-style-2 .related-post-item-title {
font:normal normal 16px Fjalla One, Helvetica, Arial, sans-serif;
}
.related-post-style-2 .related-post-item-summary {
display:block;
overflow:hidden;
}
.related-post-style-2 .related-post-item-more {}
/* share buttons */
.share-buttonsx-box {
height: 67px;
background: url(https://1.bp.blogspot.com/-IYbllX8reSg/VzRuBOS5YBI/AAAAAAAAEFg/4urWl4vTLPE_eBBqnwRXT9m4IKnj-zD9wCLcB/s1600/share_1.jpg) no-repeat 340px 10px;
margin:20px 0 15px;
overflow:hidden;
}
.share-buttonsx {
margin:0 0;
height:67px;
float:left;
}
.share-buttonsx .share {
float:left;
margin-right:10px;
display:inline-block;
}
/* error and search */
.status-msg-wrap {
font-size:120%;
font-weight:bold;
width:100%;
margin:20px auto;
}
.status-msg-body {
padding:20px 2%;
width:96%;
}
.status-msg-border {
border:none;
opacity:10;
width:auto;
}
.status-msg-bg {
background-color: #f0f0f0;
}
.status-msg-hidden {
padding:20px 2%;
}
.tabs-content .widget ul li:before, .sidebar ul li:before, #bottombar ul li:before {
content:"\f061";
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
text-decoration: inherit;
padding-right:4px;
color:#666;
}
#ArchiveList ul li:before {
content:"" !important;
padding-right:0px !important;
}
/* facebook comments */
.fbbox-comments {
border-bottom: 3px solid #f0f0f0;
margin: 0 0 15px;
padding: 0 0 15px;
}
.fb-comments{width: 100% !important;}
.fb-comments iframe[style]{width: 100% !important;}
.fb-like-box{width: 100% !important;}
.fb-like-box iframe[style]{width: 100% !important;}
.fb-comments span{width: 100% !important;}
.fb-comments iframe span[style]{width: 100% !important;}
.fb-like-box span{width: 100% !important;}
.fb-like-box iframe span[style]{width: 100% !important;
}
.rich-snippet {
padding:10px;
margin:15px 0 0;
border:3px solid #eee;
font-size:12px;
}
