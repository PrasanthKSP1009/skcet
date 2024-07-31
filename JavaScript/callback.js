function formValidation(fVC) {
    setTimeout(() => {
        console.log("FOrm Validation CAlled");
        fVC();
    }, 1000);
}
function formValidationCompleted() {
  console.log("Form Validation COmpleted");
}

formValidation(formValidationCompleted);
