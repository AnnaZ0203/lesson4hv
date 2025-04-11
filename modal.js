(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

(() => {
  const refs = {
    openMobBtn: document.querySelector("[data-mob-open]"),
    closeMobBtn: document.querySelector("[data-mob-close]"),
    mob: document.querySelector("[data-mob]"),
  };

  refs.openMobBtn.addEventListener("click", toggleMob);
  refs.closeMobBtn.addEventListener("click", toggleMob);

  function toggleMob() {
    refs.mob.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
