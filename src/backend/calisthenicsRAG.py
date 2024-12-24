from langchain_community.document_loaders import PyPDFLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter

class CalisthenicsRAG:
    def __init__(self, pdf_path, openai_api_key):
        """
        Initialize RAG system with OpenAI embeddings
        
        Args:
            pdf_path (str): Path to the PDF document
            openai_api_key (str): OpenAI API key for embeddings
        """
        if not openai_api_key:
            raise ValueError("OpenAI API key is required for embeddings")
        
        self.pdf_path = pdf_path
        self.embeddings = OpenAIEmbeddings(
            api_key=openai_api_key, 
            model="text-embedding-3-small"  # Most cost-effective embedding model
        )
        self.vectorstore = self._create_vectorstore()

    def _create_vectorstore(self):
        """
        Create a vector store from the PDF document
        
        Returns:
            Chroma: Vectorstore with embedded documents
        """
        # Load PDF
        loader = PyPDFLoader(self.pdf_path)
        documents = loader.load()

        # Split text
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,  # Adjust based on your document
            chunk_overlap=200
        )
        texts = text_splitter.split_documents(documents)

        # Create vectorstore
        return Chroma.from_documents(texts, self.embeddings)

    def retrieve_context(self, query, k=3):
        """
        Retrieve relevant context from the vectorstore
        
        Args:
            query (str): Search query
            k (int): Number of most relevant documents to retrieve
        
        Returns:
            str: Concatenated context from retrieved documents
        """
        retrieved_docs = self.vectorstore.similarity_search(query, k=k)
        return "\n\n".join([doc.page_content for doc in retrieved_docs])