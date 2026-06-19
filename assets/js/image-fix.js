
(function() {
  const IMG = {'tobermory': 'https://commons.wikimedia.org/wiki/Special:FilePath/Grotto%20-%20Bruce%20Peninsula%20National%20Park.jpg?width=1280', 'grotto': 'https://commons.wikimedia.org/wiki/Special:FilePath/20170626%20Bruce%20Peninsula%20Park%20Grotto.jpg?width=1280', 'flowerpot': 'https://commons.wikimedia.org/wiki/Special:FilePath/Tobermory%2C%20Ontario%20Flowerpot%20Island%20%285845333454%29.jpg?width=1280', 'bruce': 'https://commons.wikimedia.org/wiki/Special:FilePath/Bruce%20Peninsula%20National%20Park%20%E2%80%93%20The%20Grotto%E2%80%93Ontario%20%281%29.jpg?width=1280', 'elora': 'https://commons.wikimedia.org/wiki/Special:FilePath/Elora%20Gorge%2C%20Elora%2C%20Ontario%20%2821651810390%29.jpg?width=1280', 'elora_town': 'https://commons.wikimedia.org/wiki/Special:FilePath/Elora%2C%20Ontario%20%2821849472731%29.jpg?width=1280', 'stratford': 'https://commons.wikimedia.org/wiki/Special:FilePath/Avon%20River%2C%20Stratford%2C%20Ontario%20%2821651600128%29.jpg?width=1280', 'stratford_bridge': 'https://commons.wikimedia.org/wiki/Special:FilePath/Bridge%2C%20Avon%20River%2C%20Stratford%2C%20Ontario%20%2821651644568%29.jpg?width=1280', 'niagara': 'https://commons.wikimedia.org/wiki/Special:FilePath/Niagara-on-the-Lake%20Ontario%2C%20%2838895993545%29.jpg?width=1280', 'niagara2': 'https://commons.wikimedia.org/wiki/Special:FilePath/Niagara%20On%20The%20Lake.jpg?width=1280', 'algonquin': 'https://commons.wikimedia.org/wiki/Special:FilePath/Ontario%20Parks.jpg?width=1280', 'sandbanks': 'https://commons.wikimedia.org/wiki/Special:FilePath/Sandbanks%20Provincial%20Park-%20Sand%20Dunes-Ontario.jpg?width=1280', 'sandbanks2': 'https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Ontario%20-%20Sandbanks%20Provincial%20Park%202001.jpg?width=1280', 'blue': 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Mountain%20Ontario.jpg?width=1280', 'blue2': 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Mountains%20%287672976922%29.jpg?width=1280', 'paris': 'https://commons.wikimedia.org/wiki/Special:FilePath/Paris%20Ontario%20Grand%20River%20riverfront%201.JPG?width=1280', 'paris2': 'https://commons.wikimedia.org/wiki/Special:FilePath/Bridges%20over%20the%20Grand%20River%2C%20Paris%20Ontario%20-2012-07-21-009.jpg?width=1280', 'muskoka': 'https://commons.wikimedia.org/wiki/Special:FilePath/Muskoka%2079.47W%2045.03N.png?width=1280', 'mono': 'https://commons.wikimedia.org/wiki/Special:FilePath/Elora%20Gorge%2C%20Elora%2C%20Ontario%20%2821651945938%29.jpg?width=1280', 'fallback': 'https://commons.wikimedia.org/wiki/Special:FilePath/Sandbanks%20Provincial%20Park.jpg?width=1280', 'waterfall': 'https://commons.wikimedia.org/wiki/Special:FilePath/Tews%20Falls%20-%20Hamilton%20Ontario.jpg?width=1280', 'lake': 'https://commons.wikimedia.org/wiki/Special:FilePath/Outlet%20River%2C%20Sandbanks%20Provincial%20Park%2C%20Ontario%2C%20Canada.jpg?width=1280', 'cabin': 'https://commons.wikimedia.org/wiki/Special:FilePath/Elora%2C%20Ontario%20%2821652853399%29.jpg?width=1280', 'night': 'https://commons.wikimedia.org/wiki/Special:FilePath/Grotto%20-%20Bruce%20Peninsula%20National%20Park.jpg?width=1280'};
  function pick(text) {
    text = (text || '').toLowerCase();
    if (text.includes('flowerpot')) return IMG.flowerpot;
    if (text.includes('tobermory') || text.includes('grotto') || text.includes('bruce peninsula') || text.includes('dorcas') || text.includes('singing sands') || text.includes('georgian')) return IMG.tobermory;
    if (text.includes('elora')) return IMG.elora;
    if (text.includes('niagara')) return IMG.niagara;
    if (text.includes('stratford') || text.includes('avon')) return IMG.stratford;
    if (text.includes('algonquin')) return IMG.algonquin;
    if (text.includes('sandbanks') || text.includes('prince edward') || text.includes('pec') || text.includes('dunes') || text.includes('lavender')) return IMG.sandbanks;
    if (text.includes('blue mountain') || text.includes('collingwood')) return IMG.blue;
    if (text.includes('paris')) return IMG.paris;
    if (text.includes('muskoka') || text.includes('lake') || text.includes('cottage') || text.includes('cabin') || text.includes('glamping') || text.includes('geodome')) return IMG.lake;
    if (text.includes('waterfall') || text.includes('tews') || text.includes('webster') || text.includes('dundas')) return IMG.waterfall || IMG.fallback;
    if (text.includes('mono') || text.includes('devil')) return IMG.mono;
    return IMG.fallback;
  }
  function fixImg(img) {
    const context = [img.alt, img.title, document.title, img.closest('.card,.photo,.hero,.stay-card,.guide-card')?.innerText].join(' ');
    const chosen = pick(context);
    if (!img.dataset.originalSrc) img.dataset.originalSrc = img.getAttribute('src') || '';
    const src = img.getAttribute('src') || '';
    if (!src || src.includes('upload.wikimedia.org/wikipedia/commons/thumb') || src.includes('undefined')) {
      img.src = chosen;
    }
    img.onerror = function() {
      if (img.src !== chosen) { img.src = chosen; }
      else { img.style.display='block'; img.style.background='#dfeee5'; }
    };
    img.loading = img.loading || 'lazy';
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(fixImg);
  });
})();
