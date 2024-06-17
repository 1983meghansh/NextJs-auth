export default function UserProfile({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profilddde</h1>
            <p className="text-6xl">
                Profile page
                <span className="p-2 rounded bg-orange-500 text-black">
                {params.id}</span>  </p>
        </div>
    );
}