!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var PaginationLinks=React.createClass({displayName:"PaginationLinks",mixins:[React.addons.PureRenderMixin],propTypes:{onChangePage:React.PropTypes.func},getDefaultProps:function(){return{RowsPerPage:10,Active:1}},changePage:function(i){var that=this;return function(evt){evt.preventDefault(),that.props.onChangePage&&that.props.onChangePage(i)}},render:function(){var classList,rowsPerPage=this.props.RowsPerPage,pageLinks=[],lastPage=Math.ceil(this.props.total/rowsPerPage),startPage=Math.max(1,this.props.Active-3),lastShownPage=Math.min(this.props.Active+3,lastPage);if(0===this.props.total)return React.createElement("div",null);lastShownPage-startPage<=7&&(lastShownPage=startPage+6,lastShownPage>lastPage&&(lastShownPage=lastPage,startPage=lastPage-6)),startPage>1&&pageLinks.push(React.createElement("li",{onClick:this.changePage(1)},React.createElement("a",{href:"#"},"«")));for(var i=startPage;i<=lastShownPage;i+=1)classList="",this.props.Active==i&&(classList="active"),pageLinks.push(React.createElement("li",{onClick:this.changePage(i),className:classList},React.createElement("a",{href:"#"},i)));return lastShownPage!==lastPage&&pageLinks.push(React.createElement("li",{onClick:this.changePage(lastPage)},React.createElement("a",{href:"#"},"»"))),React.createElement("ul",{className:"pagination"},pageLinks)}});window.PaginationLinks=PaginationLinks,window.RPaginationLinks=React.createFactory(PaginationLinks),exports.default=PaginationLinks}]);
//# sourceMappingURL=react.paginator.js.map