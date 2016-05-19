function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  renderStatus('Looking for the latest video');

  renderStatus("Here it is: Casey's latest: ");
  var vidembed = document.getElementById('video-result');

  vidembed.width = "300px";
  vidembed.height = "300px";
  vidembed.src = "http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=caseyneistat";
  vidembed.hidden = false;

  var vid_a = document.getElementById("vid_a");

  vid_a.hidden = false;
  vid_a.href = "http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=caseyneistat";

});
