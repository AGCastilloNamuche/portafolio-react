import avatar1 from "../../assets/images/avatars/photo-14.png"
import avatar2 from "../../assets/images/avatars/photo-15.png"
import avatar3 from "../../assets/images/avatars/photo-16.png"
import avatar4 from "../../assets/images/avatars/photo-17.png"
import avatar5 from "../../assets/images/avatars/photo-18.png"

export type AvatarSrc = string;

export type Contact = Readonly<{
    id: number;
    name: string;
    email: string;
    n_contacts: string;
    status: string;
    avatar: AvatarSrc;
    lastMessage: string;
    date: string;
    time: string;
    unread: number;
    isActive: boolean;
}>;

export const contacts = [
    {
        id: 1,
        name: "Anthony Cordero",
        email: "anthony.cordero@outlook.com",
        n_contacts: "+51 968 569 231",
        status: "online",
        avatar: avatar1,
        lastMessage: "Buenas, estoy armando un chatbot para soporte interno. ¿Me ayudas con arquitectura y flujo de datos?",
        date: "12/01/2026",
        time: "10:30 AM",
        unread: 2,
        isActive: false,
    },
    {
        id: 2,
        name: "Carlos Zapata",
        email: "carlos.zapata@outlook.com",
        n_contacts: "+52 967 569 251",
        status: "offline",
        avatar: avatar2,
        lastMessage: "Hola, necesito ayuda con Docker y docker-compose para levantar mi proyecto completo.",
        date: "12/01/2026",
        time: "10:30 AM",
        unread: 1,
        isActive: false,
    },
    {
        id: 3,
        name: "Vanesa Calderon",
        email: "vanesa.calderon@outlook.com",
        n_contacts: "+1 858 964 1249",
        status: "online",
        avatar: avatar3,
        lastMessage: "Hola, Necesito ayuda para un proyecto con implementacion de agentes IA",
        date: "12/01/2026",
        time: "10:30 AM",
        unread: 5,
        isActive: true,
    },
    {
        id: 4,
        name: "Juan Perez",
        email: "juan.perez@outlook.com",
        n_contacts: "+51 967 669 251",
        status: "offline",
        avatar: avatar4,
        lastMessage: "Buenas, quiero implementar roles y permisos (RBAC) en mi sistema. ¿Cómo lo estructuro?",
        date: "12/01/2026",
        time: "10:30 AM",
        unread: 6,
        isActive: false,
    },
    {
        id: 5,
        name: "Pedro Ramirez",
        email: "pedro.ramirez@outlook.com",
        n_contacts: "+51 967 879 251",
        status: "online",
        avatar: avatar5,
        lastMessage: "Hola, estoy integrando pagos y me falla el webhook. ¿Me ayudas a depurarlo?",
        date: "12/01/2026",
        time: "10:30 AM",
        unread: 12,
        isActive: false,
    },
] as const satisfies ReadonlyArray<Contact>;
