let od = "*";

function tree(a) {
  for (let n = 0; n < a; n++) {
    console.log(od);
    od = od + "*";
  }
}
tree(5);
//*
//**
//***
//****
//*****
