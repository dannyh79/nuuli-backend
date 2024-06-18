export default interface Repository<T, I = number> {
  findById(id: I): Promise<T>;
}
