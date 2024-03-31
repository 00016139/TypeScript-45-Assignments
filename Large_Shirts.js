function Make_Shirt(Size, Messege) {
    if (Size === void 0) { Size = "Large"; }
    if (Messege === void 0) { Messege = "I love TypeScript"; }
    console.log("Making a ".concat(Size, " size T_Shirt with the messege ").concat(Messege, " printed on it"));
}
Make_Shirt();
Make_Shirt("Medium");
Make_Shirt("Small", "Great Things Takes Times");
