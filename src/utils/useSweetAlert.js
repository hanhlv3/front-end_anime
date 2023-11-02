import Swal from 'sweetalert2'

export function useSweetAlert() {
  const showAlert = (title, text, type) => {
    Swal.fire({
      title: title,
      text: text,
      icon: type,
      showConfirmButton: false,
      timer: 2000,
    })
  }

  return {
    showAlert,
  }
}
