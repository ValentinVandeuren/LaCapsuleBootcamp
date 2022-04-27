export default function(wishlist = [], action) {
    if(action.type === 'like') {
      let wishlistCopy = [...wishlist];
      wishlistCopy.push(action.article)
      return wishlistCopy;
    }else if(action.type === 'delete'){
        let wishlistCopyDelete = [...wishlist];
        let position = null

        for(let i=0; i <wishlistCopyDelete.length; i++){
            if(wishlistCopyDelete[i].title === action.article.title){
                position = i;
            }
        }
        wishlistCopyDelete.splice(position, 1);
        return wishlistCopyDelete;
    } else {
      return wishlist;
    }
}