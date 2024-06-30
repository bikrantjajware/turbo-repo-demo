async function main(){
    await Promise.all([...Array(5)].map(async (d,i)=> {
        console.log('START i' + i + ' ' +  Date.now())
        await new Promise((r) =>{  setTimeout(r,3000) }) 
        console.log('END i',i, Date.now())
    }))
}

main()