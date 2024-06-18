export default interface Repository<T, I = number> {
  findById(id: I): Promise<T | null>;
  findBy?(params: any): Promise<T | null>;
}
