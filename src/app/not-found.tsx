import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
            <div className="flex max-w-lg flex-col items-center text-center">
                <span className="text-8xl font-bold tracking-tight text-blue-800 sm:text-9xl">
                    404
                </span>

                <div className="mt-4 h-1 w-16 rounded-full bg-blue-800" />

                <h1 className="mt-6 text-2xl font-bold text-gray-800 sm:text-3xl">
                    Opa! Essa página saiu para tomar um café ☕
                </h1>

                <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                    Procuramos por todos os cantos, mas não encontramos o que
                    você está procurando. Talvez ela tenha pegado outro caminho.
                </p>

                <p className="mt-2 text-sm font-medium text-blue-800">
                    Mas fique tranquilo, não precisa abrir um protocolo. 😄
                </p>

                <Link
                    href="/"
                    className="
                        mt-8
                        rounded-full
                        bg-blue-800
                        px-6 py-3
                        text-sm font-medium text-white
                        shadow-md
                        transition-all duration-300 ease-in-out
                        hover:bg-blue-900
                        hover:shadow-lg
                    "
                >
                    Voltar para o início
                </Link>
            </div>
        </main>
    );
}
