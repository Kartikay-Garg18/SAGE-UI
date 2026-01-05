import React from 'react'
import { useParams } from 'react-router-dom'
import { getMeeting } from '../services/meeting'

const MeetingRoom = () => {
  const { roomCode } = useParams();
  const [stream, setStream] = React.useState(null);
  const [meeting, setMeeting] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [permissions, setPermissions] = React.useState({
    camera: false,
    microphone: false
  });
  const [isJoining, setIsJoining] = React.useState(false);
  const [hasJoined, setHasJoined] = React.useState(false);
  const videoRef = React.useRef(null);

  // Fetch meeting details
  React.useEffect(() => {
    const fetchMeeting = async () => {
      if (!roomCode) return;
      
      try {
        setLoading(true);
        const meetingData = await getMeeting(roomCode);
        setMeeting(meetingData);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching meeting:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeeting();
  }, [roomCode]);

  // Request media permissions and start preview
  React.useEffect(() => {
    const requestMediaPermissions = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });
        
        setStream(mediaStream);
        setPermissions({
          camera: true,
          microphone: true
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error('Error accessing media devices:', err);
        setError('Failed to access camera and microphone. Please allow permissions and refresh.');
      }
    };

    requestMediaPermissions();

    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleJoinMeeting = async () => {
    setIsJoining(true);
    
    try {
      // Simulate joining process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setHasJoined(true);
    } catch (err) {
      setError('Failed to join meeting');
    } finally {
      setIsJoining(false);
    }
  };

  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setPermissions(prev => ({
          ...prev,
          camera: videoTrack.enabled
        }));
      }
    }
  };

  const toggleMicrophone = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setPermissions(prev => ({
          ...prev,
          microphone: audioTrack.enabled
        }));
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading meeting details...</p>
        </div>
      </div>
    );
  }

  if (error && !meeting) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  if (!hasJoined) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-medium text-gray-800">Group Discussion</h1>
          </div>
        </div>

        <div className="flex min-h-[calc(100vh-80px)]">
          {/* Left side - Camera Preview */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-2xl">
              {/* Video Preview */}
              <div className="relative bg-black rounded-xl overflow-hidden aspect-video shadow-2xl">
                {stream ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-lg">Camera not available</p>
                    </div>
                  </div>
                )}

                {/* Camera overlay - show if camera is off */}
                {stream && !permissions.camera && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-lg">Camera is off</p>
                    </div>
                  </div>
                )}

                {/* User name overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    You
                  </span>
                </div>

                {/* More options button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={toggleMicrophone}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                    permissions.microphone 
                      ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                  title={permissions.microphone ? 'Mute microphone' : 'Unmute microphone'}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {permissions.microphone ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1m0 0V5a2 2 0 012-2h2a2 2 0 012 2v8.5M9 12l6 6m0-6l-6 6" />
                    )}
                  </svg>
                </button>

                <button
                  onClick={toggleCamera}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                    permissions.camera 
                      ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                  title={permissions.camera ? 'Turn off camera' : 'Turn on camera'}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {permissions.camera ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                    )}
                  </svg>
                </button>

                <button className="w-14 h-14 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </button>
              </div>

              {/* Device Settings */}
              <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span>Microphone Array...</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span>Speakers (Realtek...)</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>HD User Facing</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Join Panel */}
          <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
            <div className="flex-1 flex flex-col justify-center px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">Ready to join?</h2>
                <p className="text-gray-600 mb-1">No one else is here</p>
                <p className="text-red-500 text-sm">This call is open to anyone</p>
              </div>

              <button
                onClick={handleJoinMeeting}
                disabled={isJoining}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4"
              >
                {isJoining ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Joining...
                  </div>
                ) : (
                  'Join now'
                )}
              </button>

              <button className="w-full text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors border border-gray-300 flex items-center justify-center gap-2">
                <span>Other ways to join</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Meeting Info */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Meeting Details</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>Room:</strong> {meeting?.roomName}</p>
                  <p><strong>Host:</strong> {meeting?.createdBy?.name}</p>
                  <p><strong>Room Code:</strong> {roomCode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Meeting Room Interface (after joining)
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome to {meeting?.roomName}
        </h1>
        <p className="text-gray-400 mt-2">You're now in the meeting room!</p>
      </div>
    </div>
  );
};

export default MeetingRoom