export const API_KEY = "AIzaSyCuqWvxRWH_QfT4ZarpJ5sOMnk_MewIMh8";
export const API_KEY2 = "AIzaSyDG4pk3EGjbEAb9tXtSxOklysCcaTe0Zco";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
