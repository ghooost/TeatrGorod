(function(){
  window.addEventListener('scroll', onScroll, true);
  window.addEventListener('resize', onResize, true);
  showImages();

  let list=null;

  function onScroll(e){
    showImages();
  }

  function onResize(e){
    showImages();
  }

  function reViewLoadableImages(){
    list=document.querySelectorAll('[data-bg]');
  }

  function showImages(){
    const windowHeight=window.innerHeight;
    if(!list) list=document.querySelectorAll('[data-bg]');
    for(let cnt=0,m=list.length;cnt<m;cnt++){
      const r=list[cnt].getBoundingClientRect();
      if(r.top<windowHeight && r.bottom>0){
        const o=list[cnt];
        if(!o.isFetching && !o.isFetched){
          ImgLoader(o.dataset.bg,o);
        }
      }
    }
  }

  function ImgLoader(imgSrc,node){
    node.isFetching=true;
    return fetch(imgSrc)
    .then(response=>response.blob())
    .then(blob=>{
      node.style.backgroundImage='url('+URL.createObjectURL(blob)+')';
      node.isFetched=true;
      node.isFetching=false;
      node.removeAttribute('data-bg');
    })
    .catch(err=>{
      node.isFetched=false;
      node.isFetching=false;
    })
  }
}());
