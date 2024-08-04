export interface HealthCheckInterface {
    checkHealth: () => Promise<void>;
}
