/**
 * @file 写文件名字
 * @author fanty@jingoal.com
 *
 * 写文件功能
 */
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ "lodash")
//     .then(({ default: _ }) => {
//       var element = document.createElement("div");
//
//       element.innerHTML = _.join(["Hello", "webpack"], " ");
//
//       return element;
//     })
//     .catch(error => "An error occurred while loading the component");
// }

async function getComponent() {
  var element = document.createElement("div");
  const {
    default: _
  } = await import(/* webpackChunkName: "lodash" */ "lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
