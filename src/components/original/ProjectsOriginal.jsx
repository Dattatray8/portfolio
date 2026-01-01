import efforder from "../../assets/projects/efforder.webp";
import querysphere from "../../assets/projects/querysphere.webp";
import yaariverse from "../../assets/projects/yaariverse.webp";
import redux from "../../assets/skill-icons/redux-svgrepo-com.svg";
import socketio from "../../assets/skill-icons/socket-svgrepo-com.svg";

function ProjectsOriginal() {
  return (
    <div className="w-[80%] mx-auto mt-20 mb-10" id="projects">
      <h2 className="text-4xl bebas-neue-regular tracking-wide text-primary mb-12">
        Projects
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <div
          className="hover-3d w-full max-w-sm cursor-pointer"
          onClick={() => window.open("https://efforder.onrender.com")}
        >
          <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <img
              src={efforder}
              alt="Efforder"
              className="w-full object-cover"
            />

            <div className="card-body">
              <div className="flex justify-between items-center py-2">
                <div className="font-semibold text-primary text-2xl">
                  Efforder
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-semibold text-lg">
                    <span className="text-green-600">M</span>
                    <span className="text-gray-600">E</span>
                    <span className="text-blue-400">R</span>
                    <span className="text-green-400">N</span>
                  </div>
                  <img src={redux} alt="Redux" className="w-5 h-5" />
                </div>
              </div>

              <p>
                A digital menu ordering & table management system built using
                MERN.
              </p>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className="hover-3d w-full max-w-sm cursor-pointer"
          onClick={() => window.open("https://query-sphere.onrender.com")}
        >
          <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <img
              src={querysphere}
              alt="QuerySphere"
              className="w-full object-cover"
            />

            <div className="card-body">
              <div className="flex justify-between items-center py-2">
                <div className="font-semibold text-primary text-2xl">
                  QuerySphere
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-semibold text-lg">
                    <span className="text-green-600">M</span>
                    <span className="text-gray-600">E</span>
                    <span className="text-blue-400">R</span>
                    <span className="text-green-400">N</span>
                  </div>
                  <img src={redux} alt="Redux" className="w-5 h-5" />
                  <img src={socketio} alt="Socket.IO" className="w-5 h-5" />
                </div>
              </div>

              <p>
                A real-time discussion platform with chat rooms and live
                updates.
              </p>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className="hover-3d w-full max-w-sm cursor-pointer"
          onClick={() => window.open("https://yaariverse.onrender.com")}
        >
          <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <img
              src={yaariverse}
              alt="Yaariverse"
              className="w-full object-cover"
            />

            <div className="card-body">
              <div className="flex justify-between items-center py-2">
                <div className="font-semibold text-primary text-2xl">
                  Yaariverse
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-semibold text-lg">
                    <span className="text-green-600">M</span>
                    <span className="text-gray-600">E</span>
                    <span className="text-blue-400">R</span>
                    <span className="text-green-400">N</span>
                  </div>
                  <img src={redux} alt="Redux" className="w-5 h-5" />
                  <img src={socketio} alt="Socket.IO" className="w-5 h-5" />
                </div>
              </div>

              <p>
                A social media platform with posts, chat, likes, and real-time
                messaging.
              </p>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsOriginal;

