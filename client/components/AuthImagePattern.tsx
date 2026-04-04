

const AuthImagePattern = ({title, subtitle}: {title: string, subtitle: string}) => {

    return(<>
    <div className="hidden lg:flex items-center justify-center " >
        <div className="w-md text-center  grid gap-3" >
            <div className="grid grid-cols-3 gap-4 " >
                {[...Array(9)].map((_,index)=>(
                    <div key={index} className={`aspect-square rounded-2xl bg-primary ${
                        index % 2 === 0 ? 'animate-pulse' : ''
                    }`} ></div>
                ))}
            </div>
            <div className="my-2" >
                <h2 className="pb-2 text-2xl font-bold text-secondary" >{title}</h2>
                <p className="text-base-content/60 text-gray-600 " >{subtitle}</p>
            </div>
        </div>
    </div>
    </>)
}
export default AuthImagePattern;