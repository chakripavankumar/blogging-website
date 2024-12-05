

 interface BlogProps {
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
 }
 export const BlogCard = ( {
    authorName,
    title,
    content,
    publishedDate
    } : BlogProps) => {

  return (
    <div>
      <div className="flex">
     <div className="font-extralight pl-2 text-slate-400">
     {authorName} 
     <div className="font-extralight pl-2 text-slate-400">
     {publishedDate}
     </div>
    
     </div>
      </div>
      <div>
        {title}
      </div>
      <div>
        {content.slice(0,100) + "..."}
      </div>
      <div>
        {`${Math.ceil(content.length/100)}`}
      </div>
      <div className=" bg-slate-200 h-1 w-full">

      </div>
    </div>
  )
}


export function Avatar({name}:{name:string}){
  return(
    

<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">
      {name}</span>
</div>


  )
}

