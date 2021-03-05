package com.example.projectfinal.projectfinal.Model;

public class Stok {
    private String idStok;
    private String tanggaDokumen;
    private String deskripsiDokumen;

    public Stok(String idStok, String tanggaDokumen, String deskripsiDokumen) {
        this.idStok = idStok;
        this.tanggaDokumen = tanggaDokumen;
        this.deskripsiDokumen = deskripsiDokumen;
    }

    public String getIdStok() {
        return idStok;
    }

    public void setIdStok(String idStok) {
        this.idStok = idStok;
    }

    public String getTanggaDokumen() {
        return tanggaDokumen;
    }

    public void setTanggaDokumen(String tanggaDokumen) {
        this.tanggaDokumen = tanggaDokumen;
    }

    public String getDeskripsiDokumen() {
        return deskripsiDokumen;
    }

    public void setDeskripsiDokumen(String deskripsiDokumen) {
        this.deskripsiDokumen = deskripsiDokumen;
    }
}
