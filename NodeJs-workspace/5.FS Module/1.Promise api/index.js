import * as fs from "fs/promises";


//creating directory


// try{
//     // await fs.mkdir('C:\\nodejs\\courses\\redux toolkit',{recursive:true});
//     console.log("folder created...");

// } catch(error){

//     console.log(error);
// }

// try{
//     const files=await fs.readdir("c:\\nodejs");
//     for(const file of files){
//         console.log(file);
//     }

// } catch(error){
//     console.log(error);
// }



// try{
//     await fs.rmdir("c:\\nodejs\\courses");
// } catch(error){
//     console.log(error);
// }


try{
    await fs.writeFile("README.md","Hello HuXn WebDev"); 
}catch(error){
    console.log(error);
}
