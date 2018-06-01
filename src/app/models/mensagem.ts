export class Mensagem {
	titulo: string;
	mensagem: string;
	autor: string;

	constructor(titulo: string, mensagem: string, autor: string) {
		this.titulo = titulo;
		this.mensagem = mensagem;
		this.autor = autor;
	}
}