export function ButtonFormat(
  selected: boolean,
  location: number,
  length: number
): string {
  let output =
    "border-t border-b border-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:z-10 hover:ring-2 hover:ring-Theme ";
  if (location === 0) {
    output += " border-l rounded-l-md ";
  }
  if (location === length - 1) {
    output += " border-r rounded-r-md ";
  }
  output += selected ? " bg-Theme text-white" : " bg-white text-gray-900";
  return output;
}
