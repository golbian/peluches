import http from "../http-common";
class PelucheServices {

    getAllPeluche() {
        return http.get(`/peluches/`);
    }

    getPeluche(id) {
        return http.get(`/peluches/${id}`);
      }

    create(data) {
      return http.post("/peluches", data);
     }

    update(id, data) {
      return http.put(`/peluches/${id}`, data);
    }

    delete(id) {
      return http.delete(`/peluches/${id}`);
    }
}

export default new PelucheServices();