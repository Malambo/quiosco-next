'use client'

import 'react-toastify/dist/ReactToastify.min.css'
import {Slide, ToastContainer} from 'react-toastify'


export default function ToastNotification() {

    return (
        <ToastContainer
        transition={Slide}
        theme = "dark"
        hideProgressBar={true}
        autoClose={3000}
        />
    )
}
