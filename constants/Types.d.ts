export interface MakerData {
    coordinate: {
        latitude: number;
        longitude: number;
    }
    imageUri: string;
    status: "safe" | "warn";
}

export interface UserConfig {
    loopBy: "duration" | "time";
    enabled: boolean;
    alertBefore: number;
    contact?: any
    sharing?: any
}