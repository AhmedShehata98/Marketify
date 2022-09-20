export const LOGIN = ((state) => {
  if (state === false) {
    // means login failed
    return false;
  }
  if (state === true) {
    // means login success
    return true;
  }
})();
export const errorState =
  "alert alert-danger col-lg-4 d-flex justify-content-center align-items-center gap-3 py-2";
export const successState =
  "alert alert-success col-lg-4 d-flex flex-column justify-content-center align-items-center gap-2 py-2 lh-sm";
