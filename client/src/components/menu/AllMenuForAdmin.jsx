import React, { useEffect, useState } from "react";

const AllMenuForAdmin = () => {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    try {
      const resMenu = await fetch(`http://localhost:3000/api/getmenu`);

      // response
      const allMenu = await resMenu.json();
      console.log(allMenu);

      if (allMenu) {
        setMenu(allMenu);
      }

      // end
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getMenu();
  }, []);

  return (
    <div>
      <div className="text-4xl text-center bg-blue-300 p-4 m-4 rounded-2xl font-medium tracking-wider">
        <h1>Dashboard For Menus !</h1>
      </div>
      <div>
        {/* Table  */}
        <div className="">
          <div className=" container mx-auto px-4 max-w-7xl my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-xl bg">
              {/* table  */}
              <table className="w-full border-2 border-black shadow-md text-sm text-left text-gray-900">
                {/* thead  */}
                <thead className="text-lg bg-slate-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Sr.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Dish Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Item-1
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Item-2
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Today's Special
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* tbody  */}
                {menu.length > 0 ? (
                  <>
                    {menu.map((item, index) => {
                      return (
                        <tbody key={index}>
                          <tr className=" border-b-2 text-slate-900 font-medium bg-slate-200">
                            {/* S.No   */}
                            <td className="px-6 py-4">{index + 1}.</td>

                            {/* Dish Thumbnail  */}
                            <th scope="row" className="px-6 py-4 font-medium ">
                              {/* thumbnail  */}
                              <img
                                className="w-16 rounded-lg"
                                src={item.image}
                                alt="thumbnail"
                              />
                            </th>

                            {/* Dish Title  */}
                            <td className="px-6 py-4">{item.dishName}</td>

                            {/* Item-1 */}
                            <td className="px-6 py-4 uppercase">
                              {item.item1}
                            </td>

                            {/* Item-2 */}
                            <td className="px-6 py-4 uppercase">
                              {item.item2}
                            </td>

                            {/* Special */}
                            <td className="px-6 py-4 uppercase">
                              {item.special} 
                            </td>

                            {/* Price  */}
                            <td className="px-6 py-4">{item.price}/-</td>

                            {/* Delete Blog  */}
                            <td className="px-6 py-4">
                              <button className=" px-4 py-1 rounded-lg text-white font-bold bg-red-500">
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </>
                ) : (
                  <h1 className="text-white">Not Found</h1>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMenuForAdmin;
