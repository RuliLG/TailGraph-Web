const bgColor = ["bg-transparent","bg-white","bg-black","bg-blueGray-50","bg-blueGray-100","bg-blueGray-200","bg-blueGray-300","bg-blueGray-400","bg-blueGray-500","bg-blueGray-600","bg-blueGray-700","bg-blueGray-800","bg-blueGray-900","bg-coolGray-50","bg-coolGray-100","bg-coolGray-200","bg-coolGray-300","bg-coolGray-400","bg-coolGray-500","bg-coolGray-600","bg-coolGray-700","bg-coolGray-800","bg-coolGray-900","bg-gray-50","bg-gray-100","bg-gray-200","bg-gray-300","bg-gray-400","bg-gray-500","bg-gray-600","bg-gray-700","bg-gray-800","bg-gray-900","bg-trueGray-50","bg-trueGray-100","bg-trueGray-200","bg-trueGray-300","bg-trueGray-400","bg-trueGray-500","bg-trueGray-600","bg-trueGray-700","bg-trueGray-800","bg-trueGray-900","bg-warmGray-50","bg-warmGray-100","bg-warmGray-200","bg-warmGray-300","bg-warmGray-400","bg-warmGray-500","bg-warmGray-600","bg-warmGray-700","bg-warmGray-800","bg-warmGray-900","bg-red-50","bg-red-100","bg-red-200","bg-red-300","bg-red-400","bg-red-500","bg-red-600","bg-red-700","bg-red-800","bg-red-900","bg-orange-50","bg-orange-100","bg-orange-200","bg-orange-300","bg-orange-400","bg-orange-500","bg-orange-600","bg-orange-700","bg-orange-800","bg-orange-900","bg-amber-50","bg-amber-100","bg-amber-200","bg-amber-300","bg-amber-400","bg-amber-500","bg-amber-600","bg-amber-700","bg-amber-800","bg-amber-900","bg-yellow-50","bg-yellow-100","bg-yellow-200","bg-yellow-300","bg-yellow-400","bg-yellow-500","bg-yellow-600","bg-yellow-700","bg-yellow-800","bg-yellow-900","bg-lime-50","bg-lime-100","bg-lime-200","bg-lime-300","bg-lime-400","bg-lime-500","bg-lime-600","bg-lime-700","bg-lime-800","bg-lime-900","bg-green-50","bg-green-100","bg-green-200","bg-green-300","bg-green-400","bg-green-500","bg-green-600","bg-green-700","bg-green-800","bg-green-900","bg-emerald-50","bg-emerald-100","bg-emerald-200","bg-emerald-300","bg-emerald-400","bg-emerald-500","bg-emerald-600","bg-emerald-700","bg-emerald-800","bg-emerald-900","bg-teal-50","bg-teal-100","bg-teal-200","bg-teal-300","bg-teal-400","bg-teal-500","bg-teal-600","bg-teal-700","bg-teal-800","bg-teal-900","bg-cyan-50","bg-cyan-100","bg-cyan-200","bg-cyan-300","bg-cyan-400","bg-cyan-500","bg-cyan-600","bg-cyan-700","bg-cyan-800","bg-cyan-900","bg-lightBlue-50","bg-lightBlue-100","bg-lightBlue-200","bg-lightBlue-300","bg-lightBlue-400","bg-lightBlue-500","bg-lightBlue-600","bg-lightBlue-700","bg-lightBlue-800","bg-lightBlue-900","bg-blue-50","bg-blue-100","bg-blue-200","bg-blue-300","bg-blue-400","bg-blue-500","bg-blue-600","bg-blue-700","bg-blue-800","bg-blue-900","bg-indigo-50","bg-indigo-100","bg-indigo-200","bg-indigo-300","bg-indigo-400","bg-indigo-500","bg-indigo-600","bg-indigo-700","bg-indigo-800","bg-indigo-900","bg-violet-50","bg-violet-100","bg-violet-200","bg-violet-300","bg-violet-400","bg-violet-500","bg-violet-600","bg-violet-700","bg-violet-800","bg-violet-900","bg-purple-50","bg-purple-100","bg-purple-200","bg-purple-300","bg-purple-400","bg-purple-500","bg-purple-600","bg-purple-700","bg-purple-800","bg-purple-900","bg-fuchsia-50","bg-fuchsia-100","bg-fuchsia-200","bg-fuchsia-300","bg-fuchsia-400","bg-fuchsia-500","bg-fuchsia-600","bg-fuchsia-700","bg-fuchsia-800","bg-fuchsia-900","bg-pink-50","bg-pink-100","bg-pink-200","bg-pink-300","bg-pink-400","bg-pink-500","bg-pink-600","bg-pink-700","bg-pink-800","bg-pink-900","bg-rose-50","bg-rose-100","bg-rose-200","bg-rose-300","bg-rose-400","bg-rose-500","bg-rose-600","bg-rose-700","bg-rose-800","bg-rose-900"]
const bgOpacity = ["bg-opacity-0","bg-opacity-5","bg-opacity-10","bg-opacity-20","bg-opacity-25","bg-opacity-30","bg-opacity-40","bg-opacity-50","bg-opacity-60","bg-opacity-70","bg-opacity-75","bg-opacity-80","bg-opacity-90","bg-opacity-95","bg-opacity-100"]
const borderColor = ["border-transparent","border-white","border-black","border-blueGray-50","border-blueGray-100","border-blueGray-200","border-blueGray-300","border-blueGray-400","border-blueGray-500","border-blueGray-600","border-blueGray-700","border-blueGray-800","border-blueGray-900","border-coolGray-50","border-coolGray-100","border-coolGray-200","border-coolGray-300","border-coolGray-400","border-coolGray-500","border-coolGray-600","border-coolGray-700","border-coolGray-800","border-coolGray-900","border-gray-50","border-gray-100","border-gray-200","border-gray-300","border-gray-400","border-gray-500","border-gray-600","border-gray-700","border-gray-800","border-gray-900","border-trueGray-50","border-trueGray-100","border-trueGray-200","border-trueGray-300","border-trueGray-400","border-trueGray-500","border-trueGray-600","border-trueGray-700","border-trueGray-800","border-trueGray-900","border-warmGray-50","border-warmGray-100","border-warmGray-200","border-warmGray-300","border-warmGray-400","border-warmGray-500","border-warmGray-600","border-warmGray-700","border-warmGray-800","border-warmGray-900","border-red-50","border-red-100","border-red-200","border-red-300","border-red-400","border-red-500","border-red-600","border-red-700","border-red-800","border-red-900","border-orange-50","border-orange-100","border-orange-200","border-orange-300","border-orange-400","border-orange-500","border-orange-600","border-orange-700","border-orange-800","border-orange-900","border-amber-50","border-amber-100","border-amber-200","border-amber-300","border-amber-400","border-amber-500","border-amber-600","border-amber-700","border-amber-800","border-amber-900","border-yellow-50","border-yellow-100","border-yellow-200","border-yellow-300","border-yellow-400","border-yellow-500","border-yellow-600","border-yellow-700","border-yellow-800","border-yellow-900","border-lime-50","border-lime-100","border-lime-200","border-lime-300","border-lime-400","border-lime-500","border-lime-600","border-lime-700","border-lime-800","border-lime-900","border-green-50","border-green-100","border-green-200","border-green-300","border-green-400","border-green-500","border-green-600","border-green-700","border-green-800","border-green-900","border-emerald-50","border-emerald-100","border-emerald-200","border-emerald-300","border-emerald-400","border-emerald-500","border-emerald-600","border-emerald-700","border-emerald-800","border-emerald-900","border-teal-50","border-teal-100","border-teal-200","border-teal-300","border-teal-400","border-teal-500","border-teal-600","border-teal-700","border-teal-800","border-teal-900","border-cyan-50","border-cyan-100","border-cyan-200","border-cyan-300","border-cyan-400","border-cyan-500","border-cyan-600","border-cyan-700","border-cyan-800","border-cyan-900","border-lightBlue-50","border-lightBlue-100","border-lightBlue-200","border-lightBlue-300","border-lightBlue-400","border-lightBlue-500","border-lightBlue-600","border-lightBlue-700","border-lightBlue-800","border-lightBlue-900","border-blue-50","border-blue-100","border-blue-200","border-blue-300","border-blue-400","border-blue-500","border-blue-600","border-blue-700","border-blue-800","border-blue-900","border-indigo-50","border-indigo-100","border-indigo-200","border-indigo-300","border-indigo-400","border-indigo-500","border-indigo-600","border-indigo-700","border-indigo-800","border-indigo-900","border-violet-50","border-violet-100","border-violet-200","border-violet-300","border-violet-400","border-violet-500","border-violet-600","border-violet-700","border-violet-800","border-violet-900","border-purple-50","border-purple-100","border-purple-200","border-purple-300","border-purple-400","border-purple-500","border-purple-600","border-purple-700","border-purple-800","border-purple-900","border-fuchsia-50","border-fuchsia-100","border-fuchsia-200","border-fuchsia-300","border-fuchsia-400","border-fuchsia-500","border-fuchsia-600","border-fuchsia-700","border-fuchsia-800","border-fuchsia-900","border-pink-50","border-pink-100","border-pink-200","border-pink-300","border-pink-400","border-pink-500","border-pink-600","border-pink-700","border-pink-800","border-pink-900","border-rose-50","border-rose-100","border-rose-200","border-rose-300","border-rose-400","border-rose-500","border-rose-600","border-rose-700","border-rose-800","border-rose-900"]
const borderSize = ["border-0","border-2","border-4","border-8","border","border-t-0","border-r-0","border-b-0","border-l-0","border-t-2","border-r-2","border-b-2","border-l-2","border-t-4","border-r-4","border-b-4","border-l-4","border-t-8","border-r-8","border-b-8","border-l-8","border-t","border-r","border-b","border-l"]
const fontSize = ["text-xs","text-sm","text-md","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl","text-9xl"]
const fontWeight = ["font-thin","font-extralight","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold","font-black"]
const opacity = ["opacity-0","opacity-5","opacity-10","opacity-20","opacity-25","opacity-30","opacity-40","opacity-50","opacity-60","opacity-70","opacity-75","opacity-80","opacity-90","opacity-95","opacity-100"]
const textAlign = ["text-left","text-center","text-right","text-justify"]
const textColor = ["text-transparent","text-white","text-black","text-blueGray-50","text-blueGray-100","text-blueGray-200","text-blueGray-300","text-blueGray-400","text-blueGray-500","text-blueGray-600","text-blueGray-700","text-blueGray-800","text-blueGray-900","text-coolGray-50","text-coolGray-100","text-coolGray-200","text-coolGray-300","text-coolGray-400","text-coolGray-500","text-coolGray-600","text-coolGray-700","text-coolGray-800","text-coolGray-900","text-gray-50","text-gray-100","text-gray-200","text-gray-300","text-gray-400","text-gray-500","text-gray-600","text-gray-700","text-gray-800","text-gray-900","text-trueGray-50","text-trueGray-100","text-trueGray-200","text-trueGray-300","text-trueGray-400","text-trueGray-500","text-trueGray-600","text-trueGray-700","text-trueGray-800","text-trueGray-900","text-warmGray-50","text-warmGray-100","text-warmGray-200","text-warmGray-300","text-warmGray-400","text-warmGray-500","text-warmGray-600","text-warmGray-700","text-warmGray-800","text-warmGray-900","text-red-50","text-red-100","text-red-200","text-red-300","text-red-400","text-red-500","text-red-600","text-red-700","text-red-800","text-red-900","text-orange-50","text-orange-100","text-orange-200","text-orange-300","text-orange-400","text-orange-500","text-orange-600","text-orange-700","text-orange-800","text-orange-900","text-amber-50","text-amber-100","text-amber-200","text-amber-300","text-amber-400","text-amber-500","text-amber-600","text-amber-700","text-amber-800","text-amber-900","text-yellow-50","text-yellow-100","text-yellow-200","text-yellow-300","text-yellow-400","text-yellow-500","text-yellow-600","text-yellow-700","text-yellow-800","text-yellow-900","text-lime-50","text-lime-100","text-lime-200","text-lime-300","text-lime-400","text-lime-500","text-lime-600","text-lime-700","text-lime-800","text-lime-900","text-green-50","text-green-100","text-green-200","text-green-300","text-green-400","text-green-500","text-green-600","text-green-700","text-green-800","text-green-900","text-emerald-50","text-emerald-100","text-emerald-200","text-emerald-300","text-emerald-400","text-emerald-500","text-emerald-600","text-emerald-700","text-emerald-800","text-emerald-900","text-teal-50","text-teal-100","text-teal-200","text-teal-300","text-teal-400","text-teal-500","text-teal-600","text-teal-700","text-teal-800","text-teal-900","text-cyan-50","text-cyan-100","text-cyan-200","text-cyan-300","text-cyan-400","text-cyan-500","text-cyan-600","text-cyan-700","text-cyan-800","text-cyan-900","text-lightBlue-50","text-lightBlue-100","text-lightBlue-200","text-lightBlue-300","text-lightBlue-400","text-lightBlue-500","text-lightBlue-600","text-lightBlue-700","text-lightBlue-800","text-lightBlue-900","text-blue-50","text-blue-100","text-blue-200","text-blue-300","text-blue-400","text-blue-500","text-blue-600","text-blue-700","text-blue-800","text-blue-900","text-indigo-50","text-indigo-100","text-indigo-200","text-indigo-300","text-indigo-400","text-indigo-500","text-indigo-600","text-indigo-700","text-indigo-800","text-indigo-900","text-violet-50","text-violet-100","text-violet-200","text-violet-300","text-violet-400","text-violet-500","text-violet-600","text-violet-700","text-violet-800","text-violet-900","text-purple-50","text-purple-100","text-purple-200","text-purple-300","text-purple-400","text-purple-500","text-purple-600","text-purple-700","text-purple-800","text-purple-900","text-fuchsia-50","text-fuchsia-100","text-fuchsia-200","text-fuchsia-300","text-fuchsia-400","text-fuchsia-500","text-fuchsia-600","text-fuchsia-700","text-fuchsia-800","text-fuchsia-900","text-pink-50","text-pink-100","text-pink-200","text-pink-300","text-pink-400","text-pink-500","text-pink-600","text-pink-700","text-pink-800","text-pink-900","text-rose-50","text-rose-100","text-rose-200","text-rose-300","text-rose-400","text-rose-500","text-rose-600","text-rose-700","text-rose-800","text-rose-900"]