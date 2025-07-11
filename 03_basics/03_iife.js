(function chai(){
    console.log("Hello World!")
})(); //Mind the ; it tells the context to stop

((name)=>{
    console.log('Helloooooo ' + name )
})('Haseeb')