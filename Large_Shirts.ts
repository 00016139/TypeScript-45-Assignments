function Make_Shirt(Size : string = "Large", Messege : string = "I love TypeScript") {
    console.log(`Making a ${Size} size T_Shirt with the messege ${Messege} printed on it`);
}

Make_Shirt();
Make_Shirt("Medium");
Make_Shirt("Small", "Great Things Takes Times");