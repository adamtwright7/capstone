import React from "react";

export const EditRoom = () => {
  return (
    <div
      id="modal"
      class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
      <div class="modal-content bg-backgroundColor rounded p-8">
        <h3 class="text-lg font-semibold mb-4">Add/Edit Room</h3>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="room-name">
            Room Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="room-name"
            type="text"
            placeholder="Enter a name for the room"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="img-url">
            Image URL
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img-url"
            type="text"
            placeholder="Enter the URL of an image for the room"
          />
        </div>

        <div class="flex justify-end">
          <button
            class="bg-goldAccents hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
            onclick="saveRoom()"
          >
            Save
          </button>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onclick="deleteRoom()"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
