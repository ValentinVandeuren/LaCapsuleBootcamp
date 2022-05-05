export default function (list = [], action) {
    if(action.type == 'saveList') {
        let listCopy = [...list];
        listCopy.push(action.list)
        return listCopy;
    }else if(action.type == 'delete') {
        let listCopyDelete = [...list];
        let position = null

        for(let i=0; i <listCopyDelete.length; i++){
            if(listCopyDelete[i].title === action.position.title && listCopyDelete[i].description === action.position.description){
                position = i;
            }
        }
        listCopyDelete.splice(position, 1);
        return listCopyDelete;
    } else {
        return list;
    }
}