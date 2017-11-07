interface Ingridient {
    id: string;
    name: string;
    amount: number;
    unit: string
}

interface Tools {
    id: string;
    description: string;
}

interface Techniques {
    id: string;
    name: string;
    description: string;
}

export interface Recipe {
    id: string;
    name: string;
    description: string;
    picture?: any;
    ingridients: Ingridient[];
    steps: {id: string, description: string}[];
    tools: {
        primary: Tools[],
        secondary?: Tools[]
    }
    isPublic: boolean
}