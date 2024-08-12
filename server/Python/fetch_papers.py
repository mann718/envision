# from scholarly import scholarly
# import json
# import sys

# def fetch_papers(query, num_papers=5):
#     search_query = scholarly.search_pubs(query)
#     papers = []
#     for i in range(num_papers):
#         try:
#             paper = next(search_query)
#             title = paper['bib']['title']
#             description = paper['bib'].get('abstract', 'No description available')
#             papers.append({'title': title, 'description': description})
#         except StopIteration:
#             break
#     return papers

# if __name__ == "__main__":
#     query = sys.argv[1] if len(sys.argv) > 1 else 'education'
#     num_papers = int(sys.argv[2]) if len(sys.argv) > 2 else 5
#     papers = fetch_papers(query, num_papers)
#     print(json.dumps(papers))
