export type MyData = {
    _embedded: {
        _entries: {
            navn: string;
            systemId: {
                identifikatorverdi: string;
            };
        }[];
    };
    total_items: number;
};