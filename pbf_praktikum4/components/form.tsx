// import { stat } from "fs";
import { useState } from "react";

export default function Form() {
    const [jawaban, setJawaban] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing')

    if (status === 'success') {
        return <h1>Yay... Jawaban Benar!</h1>
    }

    async function handleSubmit(e: {preventDefault: () => void}) {
        e.preventDefault()
        setStatus('submitting')

        try {
            await submitForm(jawaban)
            setStatus('success')
        } catch (err) {
            setStatus('typing')
            setError(err)
        }
    }

    function handleTextareaChange(e: any) {
        setJawaban(e.target.value)
    }

    return (
        <div>
            <div className="w-full max-w-xs">
                <h2>Tebak Nama Hewan</h2>
                <p>Hewan apa yang ditakuti oleh Doraemon?</p>
                <form
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                    onSubmit={handleSubmit}>
                        <textarea
                            value={jawaban}
                            onChange={handleTextareaChange}
                            disabled={status === 'submitting'}/>
                        <br />
                        <button 
                        className="bg-blue-400 p-2 m-2 rounded text-sm text-white"
                        disabled={jawaban.length === 0 || status === 'submitting'}>
                            Submit
                        </button>
                        {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
                </form>
            </div>
        </div>
    )
}

export function Form_2() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFulltName] = useState('')

    function handleFirstNameChange(e: any) {
        setFirstName(e.target.value)
        setFulltName(e.target.value + ' ' + lastName)
    }

    function handleLastNameChange(e: any) {
        setLastName(e.target.value)
        setFulltName(firstName  + ' ' + e.target.value)
    }

    return (
        <div>
            <h2>Silahkan Isi Nama Lengkap Anda</h2>
            <label className="block w-full m-2">
                Nama Depan: 
                <input className="text-sm text-black ml-2 rounded" 
                    value={firstName}
                    onChange={handleFirstNameChange}/>
            </label>
            <label className="block w-full m-2">
                Nama Belakang: 
                <input className="text-sm text-black ml-2 rounded" 
                    value={lastName}
                    onChange={handleLastNameChange}/>
            </label>
            <p>Nama Lengkap Anda adalah: <b className="text-blue-600">{fullName}</b></p>
        </div>
    )
}

function submitForm(jawaban: any) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = jawaban.toLowerCase() !== 'tikus'

            if (shouldError) {
                reject(new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'))
            } else {
                resolve()
            }
        }, 500)
    })
}