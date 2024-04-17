function Button({children, onClick}) {
    return (
        <button onClick={onClick} className="bg-slate-500 p-1 rounded text-slate-50 border-slate-700 mr-1 px-2" type='submit'>
            {children}
        </button>
    )
}

export default Button
