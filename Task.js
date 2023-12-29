const tasklist=["Buy food","Clean Room","Do laundry"]
function editTasklist(removeitem,additem) {
let taskindex=tasklist.indexOf(removeitem);
tasklist.splice(taskindex,1,additem)


console.log(tasklist);
}
editTasklist("Clean Room","exersics");

